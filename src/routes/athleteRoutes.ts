import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';
import { athleteNameMiddleware, unityYogaMiddleware, valueMiddleware } from '../middlewares/athleteMiddlewares';

const athleteRoute = Router();
const athleteController = new AthleteController();

athleteRoute.get('/', athleteController.getAll);
athleteRoute.post('/', athleteNameMiddleware, valueMiddleware, unityYogaMiddleware,  athleteController.registerAthlete);

export default athleteRoute;