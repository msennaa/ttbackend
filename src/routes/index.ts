import { Router } from "express";
import competitionRoute from "./competitionRoute";
import dartRoute from "./dartRoute";
import hidratationRoute from "./hidratationRoute";
import weightRoute from "./weightRoute";
import yogaRoute from "./yogaRoute";



const route = Router();

route.use('/yoga', yogaRoute);
route.use('/hidratation', hidratationRoute);
route.use('/register', competitionRoute);
route.use('/dart', dartRoute);
route.use('/weight', weightRoute);


export default route;