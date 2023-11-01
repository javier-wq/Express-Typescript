import express from 'express' //ESModules

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json.

const PORT = 3000

//se agrega un "_" antes del req para decirle al get que lo ignore.
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here !! ' + new Date().toLocaleDateString())
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})