const express = require("express");
const router = express.Router();
const news_controller = require("../controllers/new_controller");

router.get("/all", news_controller.getLatestArticles);
router.get("/single", news_controller.getSingleArticle);

module.exports = router;