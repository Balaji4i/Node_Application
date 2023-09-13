import { ExecuteManyOptions } from "oracledb";
import rp, { RequestPromise } from "request-promise";
import { API } from "../bundle/api";
import { xxsf_agent_sync } from "../bundle/db-package";
import {
  M_MergeAgency_bind,
  M_MergeAgency_opt,
  M_MergeAgent_bind,
  M_MergeAgent_opt,
} from "../models/agent";
import { executeManyPlSql } from "../services/database";
import {
  T_AgencyApiResp,
  T_AgentApiResp,
  T_MergeAgency_bind,
  T_MergeAgent_bind,
} from "../types/agent";

const getAgent = (): RequestPromise<T_AgentApiResp[]> => {
  return rp.get({
    uri: `${API.SALESFORCE.BASE_URL}${API.SALESFORCE.AGENT}`,
    json: true,
  });
};

const getAgency = (): RequestPromise<T_AgencyApiResp[]> => {
  return rp.get({
    uri: `${API.SALESFORCE.BASE_URL}${API.SALESFORCE.AGENCY}`,
    json: true,
  });
};

const mergeAgent_api = (bind: T_MergeAgent_bind[], opt: ExecuteManyOptions) => {
  executeManyPlSql(xxsf_agent_sync.merge_agent_sync, bind, opt);
};

const mergeAgency_api = (
  bind: T_MergeAgency_bind[],
  opt: ExecuteManyOptions
) => {
  executeManyPlSql(xxsf_agent_sync.merge_agency_sync, bind, opt);
};

export const syncAgent_api = async () => {
  const resp: T_AgentApiResp[] = await getAgent();
  mergeAgent_api(M_MergeAgent_bind(resp), M_MergeAgent_opt());
};

export const syncAgency_api = async () => {
  const resp: T_AgencyApiResp[] = await getAgency();
  // fs.writeFile(`${resp[0].Agency_ID__c}.json`, JSON.stringify(resp), function (
  //   err
  // ) {
  //   if (err) throw err;
  //   console.log("File is created successfully.");
  // });
  mergeAgency_api(M_MergeAgency_bind(resp), M_MergeAgency_opt());
};
