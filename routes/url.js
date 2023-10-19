const express = require("express");
const {
  readData,
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL).get("/",readData);


router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
