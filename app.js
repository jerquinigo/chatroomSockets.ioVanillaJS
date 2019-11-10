const express = require('express')
const app = express()
const socket = require("socket.io")

const server = app.listen(8000,function(){
    console.log("port 8000")
})

app.use(express.static('public'))
const io = socket(server)


io.on("connection", function(socket){
    console.log("made the connection", socket.id)

    socket.on("chat", function(data){
        io.sockets.emit("chat",data)
    })

    socket.on("typing", function(data){
        socket.broadcast.emit("typing", data)
    })
})

