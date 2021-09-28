const express = require('express');
const cors = require('cors');
const data = require('./data.json')
const port = 3000;

// create server
const app = express();
// app.use(express.json());
app.use(cors());

function findResults(search){
    // Searches for the inputted search string in the bodyText values in the data array, returning the parent Objects
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
    const results = findResults(searchTerm).slice(0,10);
    if (results.length){
        res.json(results);
    } else {
        res.status(404).json({error: `No results found for ${searchTerm}`})
    }
});


// start server
app.listen(port, () => {
    console.log(`Express recently departed from port ${port}`)
});