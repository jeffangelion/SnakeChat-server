const express = require('express'),
fs = require('fs'),
config = require('./config'),
secure = config.secure,
serverPort = config.port,
app = express();
if (secure)
{
    options = {
        key: fs.readFileSync(config.secure_key),
        cert: fs.readFileSync(config.secure_cert)
    };
    server = require('https').createServer(app);
} else {
    server = require('http').createServer(app);
}
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
