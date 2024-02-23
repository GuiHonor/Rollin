const express = require ('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')
const userStruture = require('./models/User')

app.use(express.json())
app.use(cors())

app.post("/", async (req, res) => {
    try{
    res.status(201)
    const {email, password, name, lastName } = req.body

    const newUser = await userStruture.create({
        email,
        password,
        name,
        lastName
    })

    res.send('Inserido no banco de dados')

    } catch(err) {
        res.status(400).send(err)
    }
})

app.get("/data", async (req, res) => {
    res.send(await userStruture.find())
})


io.on('connection', socket => {
    console.log('usuário conectado!', socket.id)

    socket.on('disconnect', reason => {
        console.log('Usuario desconectado', socket.id)
    })

    socket.on('setUserName', username => {
       socket.data.username = username
       console.log(username)
    })

    socket.on('message', message => {
        io.emit('receiveMessage', {
            message,
            authorId: socket.id,
            author: socket.data.username
        })

        console.log(message)
    })
})



app.listen(PORT, () => console.log('Server running...'))