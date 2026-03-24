const express = require('express')
 
const app = express()
 
const PORT = 3000
//HOME PAGE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

//ABOUT PAGE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

//GUESSER PAGE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})


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