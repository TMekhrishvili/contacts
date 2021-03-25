const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

app.use(cors())
app.use(express.json())

dotenv.config({ path: './config.env' })

app.use('/', require('./server/routes'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})