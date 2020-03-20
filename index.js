const express = require("express");

const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("serveur started...");
});

app.use(express.static('./public'));

app.get('/get_text', (req, res) => {
    res.send({
        tittle: "My article",
        content: "El mejor contenido del mundo",
        author: "Omy_86"
    });
});