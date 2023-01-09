// console.log('Hello Ujjal');

// const hello = require('./person');
// console.log(hello);

// const Person = require('./person');
// const personone = new Person('Ujjal', 22, 'Arabic');
// const perosntwo = new Person('Tarek', 21, 'CSE');
// personone.greetings();
// perosntwo.greetings();

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const handleReadFile = (statusCode, fileLocation, req, res) => {
  fs.readFile(fileLocation, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile(200, "./Test/index.html", req, res);
  } else if (req.url === "/about") {
   handleReadFile(200, "./Test/about.html", req, res);
  } else if (req.url === "/contact") {
    handleReadFile(200, "./Test/contact.html", req, res);
  }
  {
    handleReadFile(404, "./Test/error.html", req, res);
  }
});

server.listen(PORT, hostName, () => {
  console.log(` server is running at http://${hostName}:${PORT}`);
});
