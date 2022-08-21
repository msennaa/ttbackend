import { Router } from 'express';
import DartController from '../controllers/DartController';
import { athleteNameMiddleware, valueMiddleware } from '../middlewares/athleteMiddlewares';
import { unityDartMiddleware } from '../middlewares/unityMiddlewares';

const dartRoute = Router();

const athleteController = new DartController();

dartRoute.post('/', athleteNameMiddleware, valueMiddleware, unityDartMiddleware, athleteController.registerDartAthlete);
dartRoute.get('/', athleteController.dartChampionshipLeaderboard);
dartRoute.put('/', athleteController.updateDartCompetition);

export default dartRoute;