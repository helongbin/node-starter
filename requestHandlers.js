
const exec = require('child_process').exec;

module.exports = {
    start: (response) => {
        exec('find /', {timeout: 10000, maxBuffer: 20000*1024}, (error, stdout, stderr) => {
            response.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            response.end('start', 'utf-8');
        });
    },
    upload: (response) => {
        response.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
        response.end('upload', 'utf-8');
    }
};
