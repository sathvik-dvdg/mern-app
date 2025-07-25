// http module


// const express = require('express')
// const app = express()
// const app = require('http')
// const port = 5000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => {
//     res.json({ mssg: " first reques" })
    
// })
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const http = require('http')
// const port = 5000

const http = require('http');
http.createServer((request, response) => {
    if (request.url === '/') {
         response.end(" welcome to home page")
    }
    if (request.url === '/about') {
        response.write("welcome to about page")
        response.end()
    }
    // response.writeHead(200,{'content-type' : 'text/html'})
    response.write(`<h1> no such code<h1><a href="/"> Click Here </a>`)
    response.end()
  
}).listen(8081, () => {
    console.log('server is running in 8081')
})

