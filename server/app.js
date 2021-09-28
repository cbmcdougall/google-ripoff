const express = require('express');
const cors = require('cors');
const data = require('./data.json')
const port = 3000;

// create server
const app = express();
// app.use(express.json());
app.use(cors());

// To Do: improve search to only search whole words (e.g. searching "cat" shouldn't match "domestiCATed")
// Searches for the inputted search string in the bodyText values in the data array, returning the parent Objects
function findResults(search){
    const results = data.filter(item => item.bodyText.toLowerCase().includes(search))
    return results;
};

// Home route (to test server is working)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// On request, search for searchterm and return 10 results
app.get('/:search', (req, res) => {
    const searchTerm = req.params.search.toLowerCase();
    const results = findResults(searchTerm).slice(0,10);    // Return up to first 10 results
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