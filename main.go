package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/go-chi/chi/v5"
	vueglue "github.com/torenware/vite-go"
)

const (
	appPort = 80
)

type UserInfo struct {
	Name          string `json:"name"`
	Email         string `json:"email"`
	Purpose       string `json:"purpose"`
	Age           int    `json:"age"`
	FavoriteColor string `json:"color"`
}

var viteLib *vueglue.VueGlue

func QuestForm(w http.ResponseWriter, r *http.Request) {
	colors := map[string]string{
		"":       "YOU MUST CHOOSE",
		"red":    "Red",
		"blue":   "Blue",
		"black":  "Black",
		"yellow": "Yellow",
	}

	data := map[string]any{}
	data["form"] = UserInfo{}
	data["colors"] = colors

	renderTemplate(w, r, "quest.page", data, "base.layout")
}

func ProcessQuestForm(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		log.Printf("Error parsing form: %v", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// Certainly, we'd want to validate data here if this
	// was a real app, and not just a demo:

	data := &UserInfo{}
	data.Name = r.PostForm.Get("name")
	data.Email = r.PostForm.Get("email")
	data.FavoriteColor = r.PostForm.Get("color")
	data.Purpose = r.PostForm.Get("purpose")
	age, _ := strconv.Atoi(r.PostForm.Get("age"))
	data.Age = age

	tmplData := map[string]any{}
	tmplData["form"] = data
	debugDisplay, err := json.MarshalIndent(data, "", "    ")
	if err != nil {
		log.Printf("could not display form data: %v", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	tmplData["debug"] = string(debugDisplay)
	renderTemplate(w, r, "result.page", tmplData, "base.layout")
}

func renderTemplate(w http.ResponseWriter, r *http.Request, tmpl string, data map[string]any, partials ...string) {
	templateList := []string{
		fmt.Sprintf("./templates/%s.gotmpl", tmpl),
	}
	if len(partials) > 0 {
		for _, item := range partials {
			templateList = append(templateList, fmt.Sprintf("./templates/%s.gotmpl", item))
		}
	}

	if data == nil {
		data = map[string]any{
			"vite": viteLib,
		}
	} else {
		data["vite"] = viteLib
	}

	ts, err := template.ParseFiles(templateList...)
	if err != nil {
		log.Println(err.Error())
		http.Error(w, "Internal Server Error", 500)
		return
	}

	err = ts.Execute(w, data)
	if err != nil {
		log.Println(err.Error())
		http.Error(w, "Internal Server Error", 500)
	}
}

func main() {

	// We put our project in the frontend directory:
	projDir := os.DirFS("frontend")
	config := vueglue.ViteConfig{
		Environment:     "development",
		FS:              projDir,
		DevServerDomain: "app.localhost",
		HTTPS:           true,
	}

	// Declare our router
	mux := chi.NewMux()

	// Initialize our Vite library
	glue, err := vueglue.NewVueGlue(&config)
	if err != nil {
		log.Panicf("could not initialize vite library: %v", err)
	}
	viteLib = glue

	mux.Get("/", QuestForm)
	mux.Post("/", ProcessQuestForm)

	// Set up our vite asset server
	// Calling NewVueGlue updates the config object
	// to contain some useful defaults:
	fsHandler, err := viteLib.FileServer()
	if err != nil {
		log.Printf("vite asset server did not initialize: %v", err)
	}

	mux.Get(config.URLPrefix+"*", fsHandler.ServeHTTP)

	log.Printf("Starting quest server on port %d", appPort)
	err = http.ListenAndServe(fmt.Sprintf(":%d", appPort), mux)
	if err != nil {
		log.Fatalf("Listen failed: %v", err)
	}

}
