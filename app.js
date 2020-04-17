const express = require("express");
const db = require("./db.js");
const shortnerController = require("./Controllers/shortnerController");
const bodyParser = require("body-parser");
const Shortner = require("./Models/shortSchema");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, resp) => {
  resp.json({ message: "Main Route" });
});

app.get("/:url_hash", (req, res) => {
  const url_hash = req.params["url_hash"];
  Shortner.findOne({ url_hash: url_hash }).then((data) => {
      if (data) {
        res.redirect(data.url)
      } else {
          res.send("Route not found")
      }
  }).catch(err => res.send(err.message));
});

app.get("/dfdsf",(req, resp) => {
    resp.send("there");
})

app.use("/short", shortnerController);

app.listen(3002, () => {
  console.log("listening on 3002");
});
