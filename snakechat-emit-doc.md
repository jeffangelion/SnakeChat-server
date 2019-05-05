# SnakeChat emitter documentation
Example: `emmiterName (parameters)`
## Server-side:
```
join (userNickname)
sendMessage (senderNickname,messageContent)
disconnect (null) //outdated
exit (userNickname)
```
## Client-side:
```
userJoin (userNickname)
message (message (messageContent, senderNickname))
userDisconnect (null) //outdated
userExit (userNickname)
```
