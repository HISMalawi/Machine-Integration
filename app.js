var net = require('net');
var http = require('http');

var server = net.createServer((socket) => { 

   console.log('client connected');

   socket.setEncoding('utf8');

   socket.on('data', function(data) {

      let info = data.split("\n");

      //console.log(info[0]);

      console.log(data);
      //console.log(data.toString());
   });
   
});

server.listen(3001, () => { 
   console.log('server is listening');
});