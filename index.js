const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("server started...");
});

app.use(express.static('./public'));

app.get('/api/user', (req, res) => {
    res.send({
        name: "Omy",
        verified: true,
        birthdate: new Date(1900, 12, 12),
        firends: [ "Jessica", "Melissa", "Lyanne" ],
    });
});