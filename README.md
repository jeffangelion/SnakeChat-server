# SnakeChat-server
SnakeChat server
## Dependencies:
```
npm install express socket.io
```
## Generate your own self-signed certificate:
```
openssl genrsa 2048 > key.pem
openssl req -new -x509 -nodes -sha256 -days 30 -key key.pem -out cert.pem
```
## SnakeChat emitters documentation
Example: `emmiterName (parameters)`
### Server-side:
```
join (userNickname)
sendMessage (senderNickname,messageContent)
exit (userNickname)
```
### Client-side:
```
userJoin (userNickname)
message (message (messageContent, senderNickname))
userExit (userNickname)
```
