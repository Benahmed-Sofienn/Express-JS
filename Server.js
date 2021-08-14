//  require express
const express = require("express");

//  instance of express
const app = express();

// require wh middleware
const wh = require("./middleware/WorkingH");
app.use(wh);

// body parser middleware
app.use(express.json());

//  Routes

app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });

// app.get("/services", (req, res) => {
//   res.sendFile(__dirname + "/public/services.html");
// });
// app.get("/style.css", (req, res) => {
//   res.sendFile(__dirname + "/public/style.css");
// });

//  create server
const port = 7000;
app.listen(port, (error) => {
  error
    ? console.log("Can not connect to the server !")
    : console.log(`Server is running on port ${port} ...`);
});
