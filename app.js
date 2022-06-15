const express = require("express")
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const news_route = require("./routes/news_routes");

app.use(cors());
app.use(express.json());

app.use("/news", news_route);

app.listen(port, () => {
    console.log(`Server starting on ${port}`);
});