import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';

const yogaChampionshipRoute = Router();
const athleteController = new AthleteController();

yogaChampionshipRoute.get('/', athleteController.yogaChampionshipLeaderboard);

export default yogaChampionshipRoute;