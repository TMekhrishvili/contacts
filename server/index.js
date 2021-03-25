const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

app.use(cors())
app.use(express.json())
app.use('/', require('./server/routes'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})