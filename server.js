const express = require('express')
 
const app = express()
 
const PORT = 3000

const path = require('path');

const nodemailer = require("nodemailer");
// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//HOME PAGE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})



//DISPLAY SHOWER
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/guesser', (req, res) => {
  res.sendFile(__dirname + '/public/guesser.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})
//Making CSS work stuff
app.use(express.static(path.join(__dirname, 'public')));
//Server form stuff idk

 const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "renctestudent@gmail.com",
    pass: "qvkutajqvkfrmjkf"
  }
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: 'jburt6551@westada.org', // Replace with your email
      to: 'renctestudent@gmail.com', // Replace with the recipient's email
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.send('Email sent!');
  } catch (err) {
    res.send('Error sending email');
  }
});
