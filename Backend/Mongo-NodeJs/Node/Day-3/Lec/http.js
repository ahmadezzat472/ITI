const http = require("http");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello bla bla ',
        }));
    } else if (req.url === "/about") {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'About page',
        }));
    } else if (req.url === "/contact") {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Contact page',
        }));
    } else if (req.url === "/users") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: '404 Not Found',
        }));
    }
});


server.listen(3000, () => {
    console.log('✅✅ Server is running on port 3000');
});
