const Short = require("../Models/shortSchema.js");

var shortUrl = null;

const getIt = (req, resp, next) => {
  const obj = new URL(req.body.url);

  if (obj.protocol !== "https:" && obj.protocol !== "http:") {
    resp.json({ message: "Invalid URL" });
  }

  const url = req.body.url;

  const url_hash = randomizer();

  const data = {
    url: url,
    url_hash: url_hash,
  };
  const shortner = new Short(data);

  shortner
    .save()
    .then((data) => resp.json({ redirect_url: redirect_url(url_hash) }))
    .catch((err) => resp.send (err.message));
};

const redirect_url = (url_hash) => {
  return "http://localhost:3002/" + url_hash;
};

const randomizer = (url) => {
  var shortUrl = "";
  var map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var n = map.length;

  for (var i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * n);
    shortUrl += map.charAt(index);
  }

  return shortUrl;
};

module.exports = {
  getIt,
};
