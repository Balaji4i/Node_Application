import { NextFunction, Request, Response } from "express";
import { syncAgency_api, syncAgent_api } from "../api/agent";
import { Resp_err_403, Resp_success_200 } from "../middleware/util";

export const mergeAgent_ctrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    syncAgent_api();
    Resp_success_200(res, {
      status: "success",
    });
  } catch (err) {
    Resp_err_403(res, err.message);
  }
};

export const mergeAgency_ctrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    syncAgency_api();
    Resp_success_200(res, {
      status: "success",
    });
  } catch (err) {
    Resp_err_403(res, err.message);
  }
};
