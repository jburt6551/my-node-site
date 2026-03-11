const express = require('express')
 
const app = express()
 
const PORT = 3000
//HOME PAGE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/home', (req, res) => {
    res.send("<h1>Welcome to My Website</h1>")
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

//ABOUT PAGE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/about', (req, res) => {
    res.send("<h1>Welcome to My About</h1>")
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

//GUESSER PAGE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/guesser', (req, res) => {
    res.send("<h1>Welcome to My Guesser</h1>")
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})