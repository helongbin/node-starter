
const http = require('http');
const url = require('url');

let start = (route, handle) => {
    http.createServer((request, response) => {
        let pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname);

        route(handle, pathname, response);
    }).listen(8888);
    console.log('server has started');
};

module.exports = {
    start: start
};