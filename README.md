# Our google rip-off, ctrl+f!

## Installation & Usage

### Installation
* Clone or download the repo.
* Open terminal and navigate to the `server` folder.
* run `npm install` to install server dependencies.

### Usage
* Server
    * Run `npm start` to start the server.
    * If doing dev work, run `npm run dev` to start the server with nodemon.
* Client
    * Open main page `index.html`
    * Input your search into the search bar and click one of the submit buttons to get results!
        * "Search" will bring you a list of results.
        * "Surprise Me" will direct you to a random result.
        

## Changelog

### server/app.js
[x] Set up initial working server\
[x] Added function to search for inputted search string in `data.json` and return the resulting matches.\
[x] Added route to retrieve results on a search.\
[x] Added handling of no search results.\
[x] Added route to retrieve a random search result.\
[x] Updated search function to match whole words using regex.\
[x] Updated search function to handle multiple words in the search term.

### client/index.html
[x] Added initial HTML structure/elements.\
[x] Restructuring elements for `static/js/index.js` script.\
[x] Added placeholder elements for search results.

### client/static/css/style.css
[x] Added initial styling.\
[x] Updated styling of buttons.\
[x] Added classes for showing/hiding homepage and search results.

### client/static/js/index.js
[x] Added event listeners for search submission.\
[x] Added functions to call API to get search results.\
[x] Refined functions to extract the JSON data from API and render results on the client.\
[x] Add handling of space characters in search term to correctly pass into API call.

## Planned changes/features
[] Move search bar to top of page when displaying results, allowing user to make another search.\
[] Improvements to search function to be less strict but still relevant results.\
[] Write a testing suite.\

## Bugs
[]

## Wins & Challenges

### Wins
*

### Challenges
*

