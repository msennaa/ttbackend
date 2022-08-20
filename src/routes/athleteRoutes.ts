import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';

const athleteRoute = Router();
const athleteController = new AthleteController();

athleteRoute.get('/', athleteController.getAll);

export default athleteRoute;