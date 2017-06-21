

const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
    //1. 获取request的各个属性
    console.log( '1、客户端请求url：' + req.url );
    console.log( '2、http版本：' + req.httpVersion );
    console.log( '3、http请求方法：' + req.method );
    console.log( '4、http请求头部' + JSON.stringify(req.headers));

    //2. 获取get请求的参数
    const urlObj = url.parse(req.url);
    let queryObj = querystring.parse(urlObj.query);
    console.log(queryObj);

    //3. 获取post请求参数
    let reqBody = '';
    if (req.method === 'POST') {
        req.on('data', (thunk) => {
            reqBody += thunk;
        });
        req.on('end', () => {
            reqBody = querystring.parse(reqBody);
            console.log(reqBody);
        });
    }

    //4. 设置状态码, 状态描述信息以及响应头部
    res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});

    //5. 设置响应主体, 也可以使用res.write();
    res.end('Hello World\n', 'utf-8', () => {console.log('finished send response')});

}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');
