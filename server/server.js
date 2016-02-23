import { startWebpackDevServer } from './webpack/devServer';
import app from './express/app';
import './socketio';
import './nodered';
import { connectToCacheDatabase } from './database/redis';
connectToCacheDatabase();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Express server started');
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
