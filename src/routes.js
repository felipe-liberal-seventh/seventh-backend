import { Router } from 'express';

import MonitoringController from './app/controllers/MonitoringController';

const routes = new Router();

routes.post('/monitoring', MonitoringController.store);
routes.get('/monitoring', MonitoringController.index);

export default routes;