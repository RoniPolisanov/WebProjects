"use strict";
var express = require('express'),
    app = express(), //Define instance ofexpress module
    topic = require('./ex0_modules/md0'), //Define the path to import module   
    handler = [], //Handling list of topics, Not demands but more functional
    port = process.env.PORT || 8080;

for (let i = 0; i < 10; i++) //Creating 10 topics
    handler.push(topic({ topic: `Topic number: ${i}`, votes: 0 }));

//Sending response to http browser in get method (When enterting root adress)
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html> <html> <head></head> <body>
    <h1> Survey Service Log </h1> <blockquote> ${log} </blockquote>
    </body> </html>`);
});

//Listening to connections
app.listen(port);
console.log(`listening on port ${port}`);