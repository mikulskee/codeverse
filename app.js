require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  const output = `
  <p>Masz nową wiadomość</p>
  <h5>${req.body.mail}</h5>
  <h3>${req.body.name} pisze</h3>
  <p>${req.body.message}</p>
  `;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "mikulskee@gmail.com", // generated ethereal user
      pass: "Czosnek1!" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    to: "mikulskee@gmail.com", // list of receivers
    subject: "Powiadomienie ze strony", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
