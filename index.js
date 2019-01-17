const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const nodemailer = require("./lib/nodemailer");

app.use(bodyParser.json());

app.post("/email", (req, res, next) => {
  nodemailer.subscribe(req.body).then(response => {
    res.send("Success");
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
