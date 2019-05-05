Generate your own self-signed certificate:
======
`openssl genrsa 2048 > key.pem`
`openssl req -new -x509 -nodes -sha256 -days 30 -key key.pem -out cert.pem`