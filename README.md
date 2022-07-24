# Doing Frontend In Golang Apps

This repository is for a series of articles on doing front end
work together with Golang web apps.  Different
parts of the series are branches in this repo. I start with a simple Go web application, and build on it until we get the finished system.

1. [Starting version of the app](https://github.com/torenware/go-vite-docker/tree/starting-project). Just Go, with a bit of Bootstrap 5.
2. [Adding Vite, Javascript and CSS](https://github.com/torenware/go-vite-docker/tree/01-adding-vite). Link the Go app up with Vite 3, and add a bit of Javascript and CSS using Vite.
3. [Dockerizing Vite and the Go Project](https://github.com/torenware/go-vite-docker/tree/02-dockerize-it). Create containers for Vite and for the Go application, and wire them together using a docker-compose.yaml file.
4. [Adding an Nginx Router](https://github.com/torenware/go-vite-docker/tree/03-add-router). Set up an Nginx reverse proxy to access our Go and Vite links.
5. [Creating Certificates and Adding SSL to the Router](https://github.com/torenware/go-vite-docker/tree/04-add-ssl). Create our certs with mkcert, and modify our Nginx reverse proxy to terminate our links with SSL.

This will take about 3 articles to describe, since each step has its own pitfalls and problems we need to explain and overcome. Should be fun!


Copyright © 2022 Rob Thorne

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

