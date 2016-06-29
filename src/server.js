import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('hello there!')
})

// start the server
app.listen(process.env.PORT || 8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
