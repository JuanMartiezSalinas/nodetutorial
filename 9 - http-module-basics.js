/** @format */

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("about page mi amor .i.");
  } else {
    res.end(`
     <h1>Ooops!</h1>
    <p>This page doesnt exist you fuck</p>
    <a href='/'>Back to home lindura </a>
  `);
  }
});

server.listen(5000);
