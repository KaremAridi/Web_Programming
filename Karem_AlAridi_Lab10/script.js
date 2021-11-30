const express = require("express");
const ejs = require("ejs");
const fs = require("fs");
const weatherapi = require("openweather-apis");
const app = express();

app.listen(8081, () => {
  console.log("App is on");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}
