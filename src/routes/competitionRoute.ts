import { Router } from 'express';
import CompetitionController from '../controllers/CompetitionController';
import { competitionMiddleware } from '../middlewares/competitionMiddleware';

const competitionRoute = Router();
const competitionController = new CompetitionController();

competitionRoute.post('/', competitionMiddleware, competitionController.registerCompetition);
competitionRoute.put('/:id', competitionController.updateCompetition);

export default competitionRoute;