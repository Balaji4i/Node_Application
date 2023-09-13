import { Router } from "express";
import { LABEL } from "../bundle/label";
import { mergeAgency_ctrl, mergeAgent_ctrl } from "../controllers/agent";

const AgentRouter = Router();

AgentRouter.get(`/${LABEL.AGENT}`, mergeAgent_ctrl);
AgentRouter.get(`/${LABEL.AGENCY}`, mergeAgency_ctrl);

export default AgentRouter;
