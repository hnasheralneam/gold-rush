const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => { res.render("home"); });
app.get("/play", (req, res) => { res.render("index"); });
app.get("/mobile", (req, res) => { res.render("mobile"); });
app.get("/quickplay", (req, res) => { res.render("quickplay"); });

app.listen(port, () => { console.log(`Listening...`); });