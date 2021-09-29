const app = require('./assets/server');
const port = 3000;


// Start server
app.listen(port, () => {
    console.log(`Express recently departed from port ${port}`)
});