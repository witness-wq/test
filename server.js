const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify({
    project: "NBA 2K19 Community Server",
    status: "online",
    mode: "MyPARK research"
  }));
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000");
});