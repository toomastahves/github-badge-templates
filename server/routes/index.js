import { getSpeech } from '../controllers/speech';

const routes = (app) => {
  app.get('/speech', getSpeech);
};

export default routes;
