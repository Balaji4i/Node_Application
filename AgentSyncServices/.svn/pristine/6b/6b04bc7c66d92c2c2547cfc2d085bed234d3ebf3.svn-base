import { Router } from "express";
import { LABEL } from "../bundle/label";
import {
  getStartScheduler,
  getStatusScheduler,
  getStopScheduler,
} from "../controllers/scheduler";

const SchedulerRouter = Router();

SchedulerRouter.get(`/${LABEL.START}`, getStartScheduler);
SchedulerRouter.get(`/${LABEL.STOP}`, getStopScheduler);
SchedulerRouter.get(`/${LABEL.STATUS}`, getStatusScheduler);

export default SchedulerRouter;
