import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import crypto from 'crypto'
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'..','public','index.html'));
})

const generateToken = () => {
  return crypto.createHash('sha1').update(Date.now().toString()).digest('hex').toString()
}

const authenticate = (req, res) => {
  const username = 'Hello'
  const password = 'World'
  console.log("Authenticate?:", req.body)
  if(req.body.username === username && req.body.password === password) {
    res.send({success: true, token: generateToken()})
  }
  else {
    res.status(401).send({success: false})
  }
}

app.post('/authenticate', authenticate)

app.get('*', (req, res, next) => {
  console.log('middleware!', req.body)
  next()
})

app.get('/greet', (req, res) => {
    res.send('hello there!')
})

const port = process.env.PORT || 8080
// start the server
const server = app.listen(port, () => {
  console.log('listening at '+ port)
});
