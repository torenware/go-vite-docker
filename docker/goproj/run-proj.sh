#! /usr/bin/env bash

GO_PROJECT_DIR=${GO_PROJECT_DIR:-/app/project}

cd $GO_PROJECT_DIR
go run . $GO_FLAGS
