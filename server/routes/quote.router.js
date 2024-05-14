const express = require('express');
const router = express.Router();
const app = express()

app.use(express.json())

// ??? List of quotes
let quoteList = [];

// ??? GET request returns information
router.get('/quotes', (req, res) => {
    console.log('GET Request made for /quotes');
    // Send back the list of quotes!
    res.send(quoteList);
});

// ??? POST request save user input
router.post('/quotes', (req, res) => {
    console.log('POST Request made for /quotes');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log(req.body);
    let quoteToAdd = req.body;
    quoteList.push(quoteToAdd);
    res.sendStatus(201);
});

app.use('/', router)
app.listen(3000, () => {
    console.log("server running on port 3000");
})

// PUT request update information

// ???