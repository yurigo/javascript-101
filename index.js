
const hostname = '127.0.0.1';
const port = 3000;

let { servidor } = require("./controller.js")

servidor.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});