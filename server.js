// listens for socket connections on 6174 and http on 8000

var app = require('koat');
var IO = require('koa-socket');
var io = new IO();

var esp = require('./esp');

app.static(__dirname + '/public')

io.attach(app);

io.on('connection', (ctx, data) => {
  console.log('client joined', data);
  ctx.socket.emit('hi');

  esp.subscribe(() => {
    ctx.socket.emit('temp', 129 + Math.random() * 3);
  })

  ctx.socket.on('update', (temp) => {
    console.log('got updated temperature', temp);
    esp.set_temp(data);
  })
})

app.listen(8000);
