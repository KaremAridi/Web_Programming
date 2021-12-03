const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (_, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.get("/user", (req, res) => {
    res.render(__dirname + "/views/user", { name: req.query.name, imageURL: req.query.imageURL });
});

app.use(express.static("public"));
const server = app.listen(8081, () => {
    console.log(`On`);
})


