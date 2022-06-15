secrets = require("../secrets");
const axios = require("axios");

function getLatestArticles(req, res){
    axios
    .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + secrets.apiKey)
    .then(response => {
        articles = response["data"]["articles"];
        res.status(200).send({"articles": articles});
    })
    .catch(error => {
        console.error(error);
    });
}

function getSingleArticle(req, res){
    res.send("get one article");
}

module.exports = {
    getLatestArticles,
    getSingleArticle
}