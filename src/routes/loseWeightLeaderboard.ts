import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';

const loseWeightChampionshipRoute = Router();
const athleteController = new AthleteController();

loseWeightChampionshipRoute.get('/', athleteController.loseWeightChampionshipLeaderboard);

export default loseWeightChampionshipRoute;