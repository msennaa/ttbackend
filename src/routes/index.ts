import { Router } from "express";
import athleteRoute from "./athleteRoutes";
import dartChampionshipRoute from "./dartLeaderboard";
import hidratationChampionshipRoute from "./hidratationLeaderboard";
import loseWeightChampionshipRoute from "./loseWeightLeaderboard";
import yogaChampionshipRoute from "./yogaLeaderboard";


const route = Router();

route.use('/athlete', athleteRoute);
route.use('/yoga', yogaChampionshipRoute);
route.use('/hidratation', hidratationChampionshipRoute);
route.use('/weight', loseWeightChampionshipRoute);
route.use('/dart', dartChampionshipRoute);


export default route;