import { Router } from 'express';
import HidratationController from '../controllers/HidratationController';
import { athleteNameMiddleware, valueMiddleware } from '../middlewares/athleteMiddlewares';
import { unityHidratationMiddleware } from '../middlewares/unityMiddlewares';

const hidratationRoute = Router();

const athleteController = new HidratationController();

hidratationRoute.post('/', athleteNameMiddleware, valueMiddleware, unityHidratationMiddleware, athleteController.registerHidratationAthlete);
hidratationRoute.get('/', athleteController.hidratationChampionshipLeaderboard);
hidratationRoute.put('/', athleteController.updateHidratationCompetition);

export default hidratationRoute;