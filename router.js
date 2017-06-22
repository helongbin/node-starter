
let route = (handle, pathname, response) => {
    console.log('route for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log('no request handle found for ' + pathname);
        response.writeHead(404, 'NOT FOUND', {'Content-Type': 'text/plain'});
        response.end('404', 'utf-8');
    }
};

module.exports = {
    route: route
};
