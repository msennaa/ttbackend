import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';

const athleteRoute = Router();
const athleteController = new AthleteController();

athleteRoute.get('/', athleteController.getAll);
athleteRoute.post('/', athleteController.registerAthlete);

export default athleteRoute;