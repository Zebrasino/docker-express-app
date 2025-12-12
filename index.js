const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! Sei un MIMMO!</h1>')
})

const PORT = 9000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})