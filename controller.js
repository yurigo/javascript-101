const http = require('http');
const url = require('url');

const { users , games } = require("./mock")

const servidor = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const { name, version, description, author, license } = require("./package.json")
        res.end(JSON.stringify(
            { name, version, description, author, license }
        ))
    }

    // if (reqUrl.pathname === '/') {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     const package = require("./package.json")
    //     res.end(JSON.stringify(
    //         { name: package.name,
    //           version: package.version,
    //           description: package.description,
    //           author: package.author,
    //           license: package.license }
    //     ))
    // }
    
    else if (reqUrl.pathname === '/getUsers') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users))
    }
    else if (reqUrl.pathname === '/getGames') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(games))
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: "not found" }));
    }
})

module.exports = { servidor }