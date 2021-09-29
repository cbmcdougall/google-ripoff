const express = require('express');
const cors = require('cors');
const findResults = require('./helpers')

const app = express();
app.use(express.json());
app.use(cors());
  
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