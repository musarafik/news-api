const express = require("express");
const router = express.Router();
let news_controller = require("../controllers/new_controller");

router.get("/all", news_controller.getAllArticles);
router.get("/single", news_controller.getSingleArticle);

module.exports = router;