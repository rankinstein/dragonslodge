import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('hello there!')
})

const port = process.env.PORT || 8080
// start the server
const server = app.listen(port, () => {
  console.log('listening at '+ port)
});
