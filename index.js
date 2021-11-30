const express = require('express')
const app = express()
const port = 3000

app.use(express.static('front')) // faz a ligação com o front, que esta na pasta front !

app.get('/', (req, res) => {
  res.send('Nda para Nda')
})

app.listen(port, () => {
  console.log(`Rodando no servidor com a porta: http://localhost:${port}`)
})