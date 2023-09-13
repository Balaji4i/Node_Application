import _ from "lodash";
import { scheduledJobs, scheduleJob } from "node-schedule";
import { LABEL } from "../bundle/label";
import { syncAgency_api, syncAgent_api } from "./agent";

export const startJobs = (hours: number) => {
  _.each(LABEL.JOBS, (name) => {
    scheduleJob(name, `* ${hours} * * *`, () => {
      name === LABEL.AGENCY ? syncAgency_api() : syncAgent_api();
    });
  });
};

export const stopJobs = async () => {
  _.each(scheduledJobs, (job) => {
    job.cancel();
  });
};
