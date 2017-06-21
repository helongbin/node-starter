
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./cert/test-key.pem'), // 私钥
    cert: fs.readFileSync('./cert/test-cert.pem') // 证书
};

let server = https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('https 服务器');
});

server.listen(3000, '127.0.0.1');
