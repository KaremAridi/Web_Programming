const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "\\public");
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  });

const upload = multer({storage:multerStorage});

app.listen(8081, () => {
  console.log("App is on");
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post("/processForm", upload.single("user_image"), (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  let image = req.body.image;
  let gender = req.body.gender;
  let date = req.body.date;
  let color = req.body.color;

  let htmlReq =
    "<html><head></head><body><h1>" +
    name +
    "</h1><p>" +
    description +
    '</p><img src="' +
    image +
    '"><p>' +
    gender +
    "</p><p>" +
    date +
    "</p><p>" +
    color +
    "</p></body></html>";

  res.send(htmlReq);

  fs.writeFile(__dirname + '\\public\\'+name+'.html', htmlReq, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});
