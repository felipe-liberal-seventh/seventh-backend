import { Router } from 'express';

import MonitoringController from './app/controllers/MonitoringController';

const routes = new Router();

routes.post('/monitoring', MonitoringController.store);
// routes.get('/monitoring', MonitoringController.index);
routes.get('/monitoring', MonitoringController.update);

export default routes;