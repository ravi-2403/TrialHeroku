const express = require("express");
const bodyParser = require("body-parser");
const ports = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(ports, () => {
  console.log("Listening to port 3000");
});

// app.get('/', (req,res) => {
//     res.send('i am ravi kumar')
// })

// app.get('/about', (req, res) => {
//     res.send("this is the about page")
// })

// app.get('/contact', (req, res) => {
//     res.send("this is contact")
// })

// app.get('/contact/email', (req, res) => {
//     res.send('contact via email ravidtg3@gmail.com')
// })

// app.get('/contact/phone', (req, res) => {
//     res.send('phone no ; - 7484906645')
// })

// app.get('/contact/whatsapp', (req, res) => {
//     res.send('whatsapp me!')
// })

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/main.html");
});

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmi.html", (req, res) => {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/index.html", (req, res) => {
  let valOne = req.body.v1;
  let valTwo = req.body.v2;
  let n1 = Number(valOne);
  let n2 = Number(valTwo);
  let sum = n1 + n2;
  res.send(`Sum = ${sum}`);
});

app.post("/bmi.html", (req, res) => {
  let height = req.body.height;
  let weight = req.body.weight;

  let hval = Number(height);
  let wval = Number(weight);

  let bmi = wval / (hval * hval);

  res.send(`BMI = ${bmi}`);
});

app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});
