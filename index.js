const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001

app.use(express.static(`${__dirname}/public/build`))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/build/index.html`))
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`))
