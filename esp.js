var net = require('net');
var server = net.createServer()
server.listen(9000, 'localhost');
server.on('connection', (s) => {
  console.log('esp connected');

  s.on('data', (temp) => {
    console.log('got', temp.toString());
    temp = parseFloat(temp.toString());
    handlers.map((h) => {
      h(temp);
    })
  })
})


var handlers = [];
module.exports = {
  subscribe: function(handler) {
    handlers.push(handler);
  },
  set_temp: function(temp) {
    temp = parseInt(temp); // just in case
    console.log('setting temp to be', temp);
  }
}
