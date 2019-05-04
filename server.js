const express = require('express'),
http = require('http'),
//fs = require('fs'), //EXPERIMENTAL
config = require('./config'), //EXPERIMENTAL
serverPort = config.port,
app = express(),
server = http.createServer(app),
io = require('socket.io').listen(server);
io.on('connection', (socket) => {

socket.on('join', function(userNickname) {
        socket.broadcast.emit('userjoinedthechat',userNickname +" has joined the chat ");
    });

socket.on('messagedetection', (senderNickname,messageContent) => {
    //create message
    let  message = {"message":messageContent, "senderNickname":senderNickname}
    //send message to clients
    io.emit('message', message );
    });
    
socket.on('disconnect', function() {
    socket.broadcast.emit("userdisconnect", "user has left the chat") 
});
});

server.listen(serverPort,()=>{
});
