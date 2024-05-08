const express = require("express");
const router = express.Router();
const signatureApi = require("./apiroutes/signatureapi");

router.use("/user", signatureApi);

router.get("/", (req, res) => {
  res.send("in api route");
});

module.exports = router;