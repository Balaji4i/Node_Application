import Router from "express";
import { LABEL } from "../bundle/label";
import AgentRouter from "./agent";
import SchedulerRouter from "./scheduler";

const router = Router();

router.use(AgentRouter);
router.use(`/${LABEL.SCHEDULER}`, SchedulerRouter);

export default router;
