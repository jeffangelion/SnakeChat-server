const express = require('express'),
fs = require('fs'),
http = require('http'),
https = require('https'),
config = require('./config'),
secure = config.secure,
serverPort = config.port,
app = express();
//Debug output
app.get('/', (req, res) => {
    res.send(''+Math.floor(Date.now()/1000))
});
//
if (secure)
{
    server = https.createServer({
        key: fs.readFileSync(config.key),
        cert: fs.readFileSync(config.cert)
    }, app);
} else {
    server = http.createServer(app);
}
io = require('socket.io').listen(server);
io.on('connection', (socket) => {

socket.on('join', function(username) {
    // socket.broadcast.emit('userjoin',username +" has joined the chat");
    socket.broadcast.emit('userJoin',username);
});

socket.on('sendMessage', (username,messageContent) => {
    //create message
    let  message = {
        "message":messageContent,
        "username":username,
        "timestamp":''+Math.floor(Date.now()/1000)
    }
    //send message to clients
    io.emit('message', message );
});
    
socket.on('exit', function(username) {
    // socket.broadcast.emit('userexit', username +" has left the chat");
    socket.broadcast.emit('userExit', username);
});
//    OUTDATED
// socket.on('disconnect', function() {
//     socket.broadcast.emit("userDisconnect", "username has left the chat") 
// });
});

server.listen(serverPort,()=>{
});
