var http = require('http')

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'})
  res.end('Hello, world. ' + Date.now())
})

var port = process.env.PORT0 || 3030
server.listen(function() {
  console.log('listening on', port)
})
