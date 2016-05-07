var net = require('net');

var s = new net.Socket();
s.connect(9000);
s.setKeepAlive(true);
s.on('connect', () => {
  console.log('connected');
  setInterval(() => {
    console.log('sending...');
    s.write((130+Math.random()*3).toString());
  }, 2000)
})
