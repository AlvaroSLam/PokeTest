const express = require('express')
const app = express()
const port = 3000

const serverRoutes =  require('./routes/server.routes')
app.use('/api', serverRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})