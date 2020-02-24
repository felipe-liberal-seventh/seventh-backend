import { Router } from 'express';

import CheckAvailableController from './app/controllers/CheckAvailableController';
import MonitoringController from './app/controllers/MonitoringController';
import cors from './app/middlewares/cors';

const routes = new Router();

routes.use(cors);

routes.get('/check-available', CheckAvailableController.exec);

routes.post('/monitoring', MonitoringController.store);
routes.get('/monitoring', MonitoringController.index);
routes.delete('/monitoring/:id', MonitoringController.delete);

export default routes;