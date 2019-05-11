# SnakeChat-server
SnakeChat server
## Dependencies:
```
npm install express socket.io
```
## Generate your own self-signed certificate:
```
openssl genrsa 2048 > key.pem
openssl req -new -x509 -nodes -sha256 -days [CHANGEME] -key key.pem -out cert.pem
```
## SnakeChat emitters documentation
Example: ```emitterName (parameters)```
### Server-side:
```
join (username)
sendMessage (username,messageContent)
exit (username)
```
### Client-side:
```
userJoin (username)
message (message (messageContent, username))
userExit (username)
```
