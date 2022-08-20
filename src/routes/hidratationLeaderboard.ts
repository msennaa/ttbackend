import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';

const hidratationChampionshipRoute = Router();
const athleteController = new AthleteController();

hidratationChampionshipRoute.get('/', athleteController.hidratationChampionshipLeaderboard);

export default hidratationChampionshipRoute;