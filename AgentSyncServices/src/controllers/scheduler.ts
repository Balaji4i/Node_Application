import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { scheduledJobs } from "node-schedule";
import { startJobs, stopJobs } from "../api/job";
import { LABEL } from "../bundle/label";
import { E_SchedulerStatus, I_Status } from "../interfaces/scheduler";
import { Resp_err_403, Resp_success_200 } from "../middleware/util";

var startFlag: boolean = true;

export const getStartScheduler = async (
  req: Request<any, any, any, { hours: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const hours: number = parseInt(req.query.hours);
    if (!hours && hours !== 0)
      throw Error("Please provide hours query parameter");
    if (hours > 23)
      throw Error("Hours value should not be exceeded with 24 hours");
    if (!startFlag) throw Error("Please stop the scheduler");
    startFlag = false;
    const resp: I_Status = {
      status: E_SchedulerStatus.START,
    };
    Resp_success_200(res, resp);
    startJobs(hours);
  } catch (err) {
    Resp_err_403(res, err.message);
  }
};

export const getStopScheduler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (startFlag) throw Error("Please start the scheduler");
    startFlag = true;
    const resp: I_Status = {
      status: E_SchedulerStatus.STOP,
    };
    res.status(200).json(resp);
    stopJobs();
  } catch (err) {
    Resp_err_403(res, err.message);
  }
};

export const getStatusScheduler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const logs: {
      id: string;
      date: String;
    }[] = await Promise.all(
      _.map(LABEL.JOBS, (job) => {
        return {
          id: job,
          date: scheduledJobs[job]?.nextInvocation()?.toString(),
        };
      })
    );
    res.status(200).json(logs);
  } catch (err) {
    Resp_err_403(res, err.message);
  }
};
