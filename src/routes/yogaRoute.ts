import { Router } from 'express';
import YogaController from '../controllers/YogaController';
import { athleteNameMiddleware, valueMiddleware } from '../middlewares/athleteMiddlewares';
import { unityYogaMiddleware } from '../middlewares/unityMiddlewares';

const yogaRoute = Router();

const athleteController = new YogaController();

yogaRoute.post('/', athleteNameMiddleware, valueMiddleware, unityYogaMiddleware, athleteController.registerYogaAthlete);
yogaRoute.get('/', athleteController.yogaChampionshipLeaderboard);

export default yogaRoute;