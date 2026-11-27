const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Home page')
  }
  else if(req.url === '/about'){
    //Blocking Code with Nested forloop callback functon
    for(let i = 0; i < 2000; i++){
      for(let j = 0; j < 2000; j++){
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page') 
  }
    else{
      res.end(`
        <p>That's it,i am done!</p>
      `)
    }
})

server.listen(5000,()=>{
  console.log('Server is listening on port 5000')
})