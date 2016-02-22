import { startWebpackDevServer } from './webpack/devServer';
import app from './express/app';
import './socketio';

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server started');
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
