import { Router } from "express";
import athleteRoute from "./athleteRoutes";
import competitionRoute from "./competitionRoute";
import leaderboardRoute from "./leaderboardRoutes";



const route = Router();

route.use('/athlete', athleteRoute);
route.use(leaderboardRoute);
route.use('/register', competitionRoute);


export default route;