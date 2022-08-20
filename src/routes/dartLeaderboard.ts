import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';

const dartChampionshipRoute = Router();
const athleteController = new AthleteController();

dartChampionshipRoute.get('/', athleteController.dartChampionshipLeaderboard);

export default dartChampionshipRoute;