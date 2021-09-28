// require the lib we'll use
const express = require('express');
const cors = require('cors');
const port = 3000;

// create server
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// start server
app.listen(port, () => {
    console.log(`Express recently departed from port ${port}`)
});