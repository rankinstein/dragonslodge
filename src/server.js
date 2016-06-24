import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('hello there!')
})

app.listen(3000, () => console.log('Listening on post 3000'))
