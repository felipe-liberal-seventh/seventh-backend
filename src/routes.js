import { Router } from 'express';

import MonitoringController from './app/controllers/MonitoringController';
import cors from './app/middlewares/cors';

const routes = new Router();

routes.use(cors);
routes.post('/monitoring', MonitoringController.store);
routes.get('/monitoring', MonitoringController.index);
// routes.get('/monitoring', MonitoringController.update);

export default routes;