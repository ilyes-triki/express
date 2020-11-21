const express = require("express");
const app = express();
const path = require("path");
// app.get("/", (req, res) => {
//   res.send("dfgfd");
// });
// app.use(express.static(path.join(__dirname, "public")));
date === 0 || date === 6
  ? app.get("/", (req, res) => {
      res.send("We are out of service");
    })
  : time < 9 || time > 17
  ? app.get("/", (req, res) => {
      res.send("We are out of service");
    })
  : app.use(express.static(path.join(__dirname, "public")));

const port = process.env.port || 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}...`);
});
// app.use(express.json());
// app.use(express.static("public"));
var date = new Date().getUTCDay();
var time = new Date().getUTCHours();
