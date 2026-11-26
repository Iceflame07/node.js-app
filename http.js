const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Welcome To The Official Home Page of Scoopa Ltd');
  }

  else if (req.url === '/about') {
    res.end('Here is the history of Scoopa Ltd');
  }

  else{

    res.end(`
      <h1>Oops!</h1>
      <p>There's Nothing here yet!</p>
      <a href="/">Back to landing page</a>
    `)
  }
});

server.listen(5000);