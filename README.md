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
    * Run `npm test` to start the testing suite.
    * Run `npm run coverage` to check test coverage.
* Client
    * Open main page `index.html`
    * Input your search into the search bar and click one of the submit buttons to get results!
        * "Search" will bring you a list of results.
        * "Surprise Me" will direct you to a random result.
        
## Planned changes/features
[] Improvements to search function to be less strict but still relevant results.\
[] Possibly improve catching of errors in client-side API call.

## Bugs
[x] Upon successive searches results are appended and old results are not cleared first.

## Wins & Challenges

### Wins
* Getting a decent search function to work
* Workflow went smoothly, no git issues
* Getting the API set up was simple

### Challenges
* Trying to get the results rendering to work correctly using append
* Refining the search

## Changelog

### server/assets/server.js
[x] Set up initial working server\
[x] Added function to search for inputted search string in `./data.json` and return the resulting matches.\
[x] Added route to retrieve results on a search.\
[x] Added handling of no search results.\
[x] Added route to retrieve a random search result.\
[x] Updated search function to match whole words using regex.\
[x] Updated search function to handle multiple words in the search term.\
[x] Moved server initialisation to `../index.js`.\
[x] Rename to `server.js`, moved helper functions to `./api_helpers.js`.

### server/tests
[x] Added `./routes.spec.js` to carry out tests on the API routes.\
[x] Added `./api_helpers.spec.js` to carry out tests on api helper functions.

### client/index.html
[x] Added initial HTML structure/elements.\
[x] Restructuring elements for `./static/js/index.js` script.\
[x] Added placeholder elements for search results.\
[x] Added favicon.

### client/static/css/style.css
[x] Added initial styling.\
[x] Updated styling of buttons.\
[x] Added classes for showing/hiding homepage and search results.\
[x] Added classes to hide HTML elements after submitted search.\
[x] Added class to line up the search bar and buttons at top of results page.

### client/static/js/index.js
[x] Added event listeners for search submission.\
[x] Added functions to call API to get search results.\
[x] Refined functions to extract the JSON data from API and render results on the client.\
[x] Add handling of space characters in search term to correctly pass into API call.\
[x] Fix functions retrieving search result data.\
[x] Added rendering of no results message.\
[x] Added hiding of HTML elements after submitted search.\
[x] Added functionality to move search bar to top of page when displaying results, allowing user to make another search.\
[x] Fixed bug where new searches appended results and didn't clear the old results.

### client/static
[x] Added logo to `./images` and added into `../index.html` and `./css/style.css`