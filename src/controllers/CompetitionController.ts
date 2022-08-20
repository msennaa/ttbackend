import { Request, Response } from "express";
import Competition from "../database/models/Competition";
import CompetitionService from "../services/CompetitionService";

export default class CompetitionController {
  service = new CompetitionService();

  registerCompetition = async (req:Request, res:Response) => {
    const { competitionName } = req.body;  
    const newCompetition = await this.service.registerCompetition(competitionName);

    if (newCompetition === { message: 'Competition in progress'} ) {
      return res.status(401).json({ message: 'Competition in progress' })
    }

    return res.status(201).json(newCompetition);
  }

  updateCompetition = async (req:Request, res:Response) => {
    const { id } = req.params;
    const findCompetition = await Competition.findByPk(Number(id))
    if (!findCompetition) {
      return res.status(401).json({ message: 'Competition not found' })
    }
    const {inProgress} = findCompetition;
    await this.service.enableAndDisableCompetition(Number(id), !inProgress);
    if (inProgress) {
      return res.status(200).json({ message: "Finishing competition" })
    }
    return res.status(200).json({ message: "Restarting competition" })
  }
}