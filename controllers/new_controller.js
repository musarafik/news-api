secrets = require("../secrets");
const axios = require("axios");

function getLatestArticles(req, res){
    axios
    .get("https://newsdata.io/api/1/news?apiKey=" + secrets.apiKey)
    .then(response => {
        console.log(response);
        res.send(response["results"]);
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