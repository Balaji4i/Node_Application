export const xxsf_agent_sync = {
  merge_agent_sync: `
            BEGIN
            xxsf_agent_sync.merge_agent_sync (
                p_agency_id => :AGENCY_ID,
                p_agency_name => :AGENCY_NAME,
                p_agent_name => :AGENT_NAME,
                p_customer_owner => :CUSTOMER_OWNER,
                p_email2 => :EMAIL2
            );
            END;
        `,
  merge_agency_sync: `
            BEGIN
            xxsf_agent_sync.merge_agency_sync (
                p_agency_id => :AGENCY_ID,
                p_agency_name => :AGENCY_NAME,
                p_agency_type => :AGENCY_TYPE,
                p_contract_type => :CONTRACT_TYPE,
                p_creation_date => :CREATION_DATE,
                p_current_owner => :CURRENT_OWNER,
                p_email => :EMAIL,
                p_mobile => :MOBILE,
                p_record_type => :RECORD_TYPE,
                p_status => :STATUS
            );
            END;
        `,
};
