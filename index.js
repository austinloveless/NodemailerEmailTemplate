const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const nodemailer = require("./lib/nodemailer");
const methodOverride = require("method-override");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/travel", (req, res) => {
  res.render("travel");
});

app.get("/email", (req, res) => {
  res.render("emailForm");
});

app.post("/email", (req, res, next) => {
  nodemailer.subscribe(req.body).then(response => {
    res.send("success");
  });
  res.render("success");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
