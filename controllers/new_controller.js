function getAllArticles(req, res){
    res.send("get all articles");
}

function getSingleArticle(req, res){
    res.send("get one article");
}

module.exports = {
    getAllArticles,
    getSingleArticle
}