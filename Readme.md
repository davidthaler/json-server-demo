# json-server-demo

## Introduction

NPM pkg 'json-server' is a turnkey fake-API creator. 
It accesses a local data file in json format and serves up pieces of it 
on localhost in response to REST calls. It watches the data file, so changes 
appear immediately. It can run some queries against the data, so it can
simulate a database in some use cases. 

This project excersizes it using data from the flashcard project.

## Installation

To install json-server locally (what I did):

    `>> npm install json-server`

That pulls in nodemon, which is the actual server. This does not install 
json-server or nodemon globally or put either one on the system path, so 
running it works differently than in the docs.

## Usage

### To run

    `>> npx json-server --watch [path to json data]`

This is different than what the docs say to do, because we did npm install,
which does a local package install instead of npm install -g which does a 
global install and adds the pkg to the system path.

    `>> npm run dev`

...also works because I added this line under 'scripts' in package.json:

    `"dev": "json-server --watch db.json"`

That means that `npm run dev` executes that line with npx.

### To call

The json-server pkg mocks up a database-backed REST API serving json data.
It also serves static files out of the /public directory.
In a browser, or curl, just access the URL.

    * Landing page (public/index.html): http://localhost:3000/
    * All decks: http://localhost:3000/decks
    * Deck with id=1: http://localhost:3000/decks/1
    * Public decks: http://localhost:3000/decks?public=true

The data pretty much has to have an 'id' field (not _id). If you don't, you
can't use the "decks/1" form, although you can still use "decks?_id=1".

Strictly speaking, you can also POST to json-server. That adds the data to 
the json data file. This example creates a new user:

    >> curl --header Content-Type:application/json --request POST 
    --data '{"id":"1004", "name":"Billy"}' http://localhost:3000/users

That id has to not already be in use. This also works and avoids that gotcha:

    >> curl --header Content-Type:application/json --request POST 
    --data '{"name":"JR"}' http://localhost:3000/users/

## References

1. NPM page at https://www.npmjs.com/package/json-server
2. github repo: https://github.com/typicode/json-server
3. own code for the async javascript course on pluralsight:
    https://github.com/davidthaler/async-programming-promises
This is where I learned about json-server. My code is on the 'mycode' branch.