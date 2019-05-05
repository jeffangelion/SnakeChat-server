SnakeChat emitter documentation
======
Example: emmiterName (parameters)
Server-side:
------
`join (userNickname)`
`sendmessage (senderNickname,messageContent)`
`disconnect (null)`
Client-side:
------
`userjoin (userNickname)`
`message (message (messageContent, senderNickname))`
`userdisconnect (null)`
