const express = require('express');
const cors = require('cors');
const data = require('./data.json')

const app = express();
app.use(express.json());
app.use(cors());


// Escapes RegExp characters in a string to be used in RegExp searches
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// Search for a given search term
function findResults(search){
    // Just using String.prototype.includes() matches within words
    // Want to search for matches of whole words (so that e.g. "cat" doesn't match "domestiCATed dog")
    const searchTerm = search.toLowerCase().split('_'); // Space characters get passed in as underscores
    const results = data.filter(item => {
        const bodyTextWords = item.bodyText.toLowerCase();
        const findWords = searchTerm.map(term => {
            const regex = new RegExp(`\\b${escapeRegExp(term)}\\b`);
            const findWord = bodyTextWords.search(regex);
            return findWord;            
        });
        const noWordsFound = findWords.includes(-1);    // Gives true if no words were found
        return !noWordsFound
    });
    return results;
};
  
// Home route (to test server is working)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// On request, search for searchterm and return 10 results
app.get('/:search', (req, res) => {
    const searchTerm = req.params.search.toLowerCase();
    const results = findResults(searchTerm).slice(0,10);
    if (results.length){
        res.json(results);
    } else {
        res.status(404).json({error: `No results found for ${searchTerm}`})
    }
});

// On request, return a random result
app.get('/:search/random', (req, res) => {
    const searchTerm = req.params.search.toLowerCase();
    const results = findResults(searchTerm);
    if (results.length){
        const randResult = results[Math.floor(Math.random()*results.length)];
        res.json(randResult);
    } else {
        res.status(404).json({error: `No results found for ${searchTerm}`})
    }
});

module.exports = app;