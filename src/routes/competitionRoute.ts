import { Router } from 'express';
import CompetitionController from '../controllers/CompetitionController';

const competitionRoute = Router();
const competitionController = new CompetitionController();

competitionRoute.post('/', competitionController.registerCompetition);
competitionRoute.put('/:id', competitionController.updateCompetition);

export default competitionRoute;