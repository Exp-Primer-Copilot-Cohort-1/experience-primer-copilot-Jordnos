// Create web server
// Run server: node comments.js
// View at: http://localhost:3000

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', (req, res) => {
    fs.readFile('data/comments.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('data/comments.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        let comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('data/comments.json', JSON.stringify(comments), 'utf8', (err) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            }
            res.status(201).send('OK');
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});