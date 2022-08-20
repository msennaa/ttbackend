import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';

const leaderboardRoute = Router();

const athleteController = new AthleteController();

leaderboardRoute.get('/dart', athleteController.dartChampionshipLeaderboard);
leaderboardRoute.get('/hidratation', athleteController.hidratationChampionshipLeaderboard);
leaderboardRoute.get('/weight', athleteController.loseWeightChampionshipLeaderboard);
leaderboardRoute.get('/yoga', athleteController.yogaChampionshipLeaderboard);

export default leaderboardRoute;