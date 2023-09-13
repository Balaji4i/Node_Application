import { BindDefinition } from "oracledb";

export type T_AgentApiResp = {
  attributes: T_Attributes;
  Id: string;
  Name: string;
  Par_Agency_ID__c: string;
  Parent_Agency__c: string;
  Email__c: string;
  OwnerId: string;
  Parent_Agency__r: T_Object;
  Owner: T_Object;
};

export type T_AgencyApiResp = {
  attributes: T_Attributes;
  Id: string;
  Name: string;
  Agency_ID__c: string;
  Record_Type__c: string;
  Email__c: string;
  OwnerId: string;
  MobilePhone__c: string;
  Agency_Type__c: string;
  Agency_Type1__c: string;
  Created_Date__c: string;
  Owner: T_Object;
};

export type T_MergeAgent_bind = {
  AGENCY_ID: string;
  AGENCY_NAME: string;
  AGENT_NAME: string;
  CUSTOMER_OWNER: string;
  EMAIL2: string;
};

export type T_MergeAgency_bind = {
  AGENCY_ID: string;
  AGENCY_NAME: string;
  AGENCY_TYPE: string;
  CONTRACT_TYPE: string;
  CREATION_DATE: Date | null;
  CURRENT_OWNER: string;
  EMAIL: string;
  MOBILE: string;
  RECORD_TYPE: string;
  STATUS: string;
};

export type T_MergeAgent_opt = {
  AGENCY_ID: BindDefinition;
  AGENCY_NAME: BindDefinition;
  AGENT_NAME: BindDefinition;
  CUSTOMER_OWNER: BindDefinition;
  EMAIL2: BindDefinition;
};

export type T_MergeAgency_opt = {
  AGENCY_ID: BindDefinition;
  AGENCY_NAME: BindDefinition;
  AGENCY_TYPE: BindDefinition;
  CONTRACT_TYPE: BindDefinition;
  CREATION_DATE: BindDefinition;
  CURRENT_OWNER: BindDefinition;
  EMAIL: BindDefinition;
  MOBILE: BindDefinition;
  RECORD_TYPE: BindDefinition;
  STATUS: BindDefinition;
};

type T_Attributes = {
  type: string;
  url: string;
};

type T_Object = {
  attributes: T_Attributes;
  Id: string;
  Name: string;
};
