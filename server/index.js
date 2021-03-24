const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ id: 1 })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})