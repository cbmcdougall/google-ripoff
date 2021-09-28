const express = require('express');
const cors = require('cors');
const data = require('./data.json')

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

function escapeRegExp(string) {
    // In case the search word includes RegEx characters
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// To Do: How are we searching for strings with space characters in them e.g. 'NGC 6946'?

// Searches for the inputted search string in the bodyText values in the data array, returning the parent Objects
function findResults(search){
    // const results = data.filter(item => item.bodyText.toLowerCase().includes(search));
    const results = data.filter(item => {
        // Just using String.prototype.includes() matches within words
        // Want to search for matches of whole words (so that e.g. "cat" doesn't match "domestiCATed dog")
        let bodyTextWords = item.bodyText.toLowerCase();
        let regex = new RegExp(`\\b${escapeRegExp(search)}\\b`);
        let findWord = bodyTextWords.search(regex);
        return findWord!=-1 ? true : false
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

// Start server
app.listen(port, () => {
    console.log(`Express recently departed from port ${port}`)
});