# Doing Frontend In Golang Apps

This repository is for a series of articles on doing front end
work together with Golang web apps.  Different
parts of the series are branches in this repo. I start with a simple Go web application, and build on it until we get the finished system.

1. [Starting version of the app](https://github.com/torenware/go-vite-docker/tree/starting-project). Just Go, with a bit of Bootstrap 5.
2. [Adding Vite, Javascript and CSS](https://github.com/torenware/go-vite-docker/tree/01-adding-vite). Link the Go app up with Vite 3, and add a bit of Javascript and CSS using Vite.
3. [Dockerizing Vite and the Go Project](https://github.com/torenware/go-vite-docker/tree/02-dockerize-it). Create containers for Vite and for the Go application, and wire them together using a docker-compose.yaml file.
4. [Adding an Nginx Router](https://github.com/torenware/go-vite-docker/tree/03-add-router). Set up an Nginx reverse proxy to access our Go and Vite links.
5. [Creating Certificates and Adding SSL to the Router](https://github.com/torenware/go-vite-docker/tree/04-add-ssl). Create our certs with mkcert, and modify our Nginx reverse proxy to terminate our links with SSL.

## The Articles

The pieces of the "Doing Frontend Development with Golang, JavaScript and Docker" series are now up on Medium:

  *  [Part the First: Better JavaScript in Go with Vite](https://robthorne-26852.medium.com/doing-frontend-development-with-golang-javascript-and-docker-part-the-first-e801ab6df940)
  *  [Part the Second: Dockerize Your Go and Vite Setup](https://robthorne-26852.medium.com/doing-frontend-development-with-golang-javascript-and-docker-part-the-second-44e955b24387)
  *  [Part the Third: Creating Certificates and Setting up a Router](https://robthorne-26852.medium.com/doing-frontend-development-with-golang-javascript-and-docker-part-the-third-6f624ed8611d)


## Reading List

A number of articles and software packages were essential in figuring out how to do this tutorial.  Here are my main sources:

* [How to set up an easy and secure reverse proxy with Docker, Nginx & Letsencrypt](https://www.freecodecamp.org/news/docker-nginx-letsencrypt-easy-secure-reverse-proxy-40165ba3aee2/). This freeCodeCamp piece is my major source for setting up Nginx as a reverse proxy on Docker. If you need to learn how to do that, this is your article.
* [How to handle https with docker-compose and mkcert for local development](https://knplabs.com/en/blog/how-to-handle-https-with-docker-compose-and-mkcert-for-local-development) Excellent instructions on how to set up and use [mkcert](https://github.com/FiloSottile/mkcert) to create certificates. As for Traefik, another solution for the reverse proxy: I just couldn't get it to work. Not the article's fault.
* [Vite 3 configuration docs](https://vitejs.dev/config/).  Generally great, although the sections on websocket configuration are somewhat lacking. It took a fair bit of trial and error to figure out how to configure HMR.
* [vite-go](https://github.com/torenware/vite-go): Tooting my own horn here. My [Vite integration](https://vitejs.dev/guide/backend-integration.html) module for Go.
* [Air](https://github.com/cosmtrek/air), an easy to use development build utility for Go. Air rocks, and the Air docs rock too. Using the author's docker image was truly easy to do.
* [DDEV](https://ddev.readthedocs.io/en/stable/), a Docker Compose based development environment popular with the PHP community. DDEV is a great tool, and learning how DDEV works helped a great deal in getting my much more bare-boned solution to work for Go. If you do PHP development, DDEV should be an essential part of your toolset. 
* [Working with Microservices in Go (Golang)](https://www.udemy.com/course/working-with-microservices-in-go/) (Udemy course). Trevor Sawler's Go courses are excellent, and this course in particular helped me get this tutorial to work. Good background on using Docker Compose in Go development.
* [Websocket Handshaking](https://www.cuelogic.com/blog/websocket-handshaking): article on how a websocket connection gets set up. Useful to know, especially when things aren't working as you expect.

Copyright © 2022 Rob Thorne

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

