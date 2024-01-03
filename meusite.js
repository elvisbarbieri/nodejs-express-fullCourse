const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Welcome to our home page')
    }

    if(req.url === '/about'){
        res.end('Here is our short history')
    }

    res.end('<h1> oops! </h1><p> we cannot seem to find the page you are looking for</p>')

})

server.listen(5000)