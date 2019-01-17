const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const nodemailer = require("./lib/nodemailer");
const methodOverride = require("method-override");

app.use(bodyParser.json());

app.post("/email", (req, res, next) => {
  console.log("body", req.body);
  nodemailer.subscribe(req.body).then(res => {
    res.send("sent");
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
