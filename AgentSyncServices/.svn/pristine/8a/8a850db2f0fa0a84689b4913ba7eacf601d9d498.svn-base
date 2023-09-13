import _ from "lodash";
import { BIND_IN, DATE, ExecuteManyOptions, STRING } from "oracledb";
import {
  T_AgencyApiResp,
  T_AgentApiResp,
  T_MergeAgency_bind,
  T_MergeAgency_opt,
  T_MergeAgent_bind,
  T_MergeAgent_opt,
} from "../types/agent";

export const M_MergeAgent_bind = (
  obj: T_AgentApiResp[]
): T_MergeAgent_bind[] => {
  return _.map(
    obj,
    (agent): T_MergeAgent_bind => {
      return {
        AGENCY_ID: agent.Par_Agency_ID__c?.replace(/'/g, "''"),
        AGENCY_NAME: agent.Parent_Agency__r?.Name?.replace(/'/g, "''"),
        AGENT_NAME: agent.Name?.replace(/'/g, "''"),
        CUSTOMER_OWNER: agent.Owner?.Name?.replace(/'/g, "''"),
        EMAIL2: agent.Email__c?.replace(/'/g, "''"),
      };
    }
  );
};

export const M_MergeAgent_opt = (): ExecuteManyOptions => {
  const options: Record<string, T_MergeAgent_opt> = {
    bindDefs: {
      AGENCY_ID: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      AGENCY_NAME: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      AGENT_NAME: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      CUSTOMER_OWNER: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      EMAIL2: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
    },
  };

  return options;
};

export const M_MergeAgency_bind = (
  obj: T_AgencyApiResp[]
): T_MergeAgency_bind[] => {
  return _.map(
    obj,
    (agent): T_MergeAgency_bind => {
      return {
        AGENCY_ID: agent.Agency_ID__c?.replace(/'/g, "''"),
        AGENCY_NAME: agent.Name?.replace(/'/g, "''"),
        AGENCY_TYPE: agent.Agency_Type1__c?.replace(/'/g, "''"),
        CONTRACT_TYPE: agent.Agency_Type__c?.replace(/'/g, "''"),
        CREATION_DATE: agent.Created_Date__c
          ? new Date(agent.Created_Date__c)
          : null,
        CURRENT_OWNER: agent.Owner.Name?.replace(/'/g, "''"),
        EMAIL: agent.Email__c?.replace(/'/g, "''"),
        MOBILE: agent.MobilePhone__c?.replace(/'/g, "''"),
        RECORD_TYPE: agent.Record_Type__c?.replace(/'/g, "''"),
        STATUS: "Active",
      };
    }
  );
};

export const M_MergeAgency_opt = (): ExecuteManyOptions => {
  const options: Record<string, T_MergeAgency_opt> = {
    bindDefs: {
      AGENCY_ID: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      AGENCY_NAME: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      AGENCY_TYPE: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      CONTRACT_TYPE: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      CREATION_DATE: {
        dir: BIND_IN,
        maxSize: 2000,
        type: DATE,
      },
      CURRENT_OWNER: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      EMAIL: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      MOBILE: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      RECORD_TYPE: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
      STATUS: {
        dir: BIND_IN,
        maxSize: 2000,
        type: STRING,
      },
    },
  };
  return options;
};
