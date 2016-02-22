import { startWebpackDevServer } from './webpack/devServer';
import app from './express/app';
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message send', (message) => {
    console.log('message', message);
    io.emit('chat message emit', message);
  });
});

const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log('server started');
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
