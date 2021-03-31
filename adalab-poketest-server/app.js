const express = require('express')
const app = express()
const port = 5005
const cors = require('cors')

//Allow CORS to comunicate between the server and the client//
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))

const serverRoutes =  require('./routes/server.routes')
app.use('/api', serverRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})