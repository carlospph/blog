import express from 'express';
import connectDB from './Config/dataBase.js';
const app = express()
const port = 3000

connectDB()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
