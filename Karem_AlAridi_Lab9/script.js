const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "\\uploads");
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

    let filey = __dirname + '\\public\\'+name+'.html';
  fs.writeFile(filey, htmlReq,{ flag: "wx" }, function (err) {
    if (err) {
        res.sendFile(filey);
      return console.log(err);
    }
    console.log("saved");
    res.send(htmlReq);
  });
});
