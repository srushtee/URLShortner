var router = require("express").Router();
const short = require("../Controllers/short")

router.route("/").post(short.getIt)

module.exports = router