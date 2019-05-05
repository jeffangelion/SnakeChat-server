const express = require('express'),
fs = require('fs'),
http = require('http'),
https = require('https'),
config = require('./config'),
secure = config.secure,
serverPort = config.port,
app = express();
app.get('/', (req, res) => {
    res.send('SnakeChat server is running')
});
if (secure)
{
    options = {
        key: fs.readFileSync(config.secure_key),
        cert: fs.readFileSync(config.secure_cert)
    };
    server = https.createServer(options, app);
} else {
    server = http.createServer(app);
}
io = require('socket.io').listen(server);
io.on('connection', (socket) => {

socket.on('join', function(userNickname) {
    // socket.broadcast.emit('userjoin',userNickname +" has joined the chat");
    socket.broadcast.emit('userJoin',userNickname);
});

socket.on('sendMessage', (senderNickname,messageContent) => {
    //create message
    let  message = {"message":messageContent, "senderNickname":senderNickname}
    //send message to clients
    io.emit('message', message );
});
    
socket.on('exit', function(userNickname) {
    // socket.broadcast.emit('userexit', userNickname +" has left the chat");
    socket.broadcast.emit('userExit', userNickname);
});
//OUTDATED
// socket.on('disconnect', function() {
//     socket.broadcast.emit("userDisconnect", "user has left the chat") 
// });
});

server.listen(serverPort,()=>{
});
