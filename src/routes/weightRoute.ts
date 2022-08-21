import { Router } from 'express';
import WeightController from '../controllers/WeigthController';
import { athleteNameMiddleware, valueMiddleware } from '../middlewares/athleteMiddlewares';
import { unityLoseWeightMiddleware } from '../middlewares/unityMiddlewares';

const weightRoute = Router();
const athleteController = new WeightController();

weightRoute.post('/', athleteNameMiddleware, valueMiddleware, unityLoseWeightMiddleware, athleteController.registerWeightAthlete);
weightRoute.get('/', athleteController.loseWeightChampionshipLeaderboard);
weightRoute.put('/', athleteController.updateWeightCompetition);

export default weightRoute;