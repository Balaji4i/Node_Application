import _ from "lodash";
import OracleDB from "oracledb";
import hrPool from "../config/database";

let connectionPool: OracleDB.Pool;
OracleDB.fetchAsBuffer = [OracleDB.BLOB];
OracleDB.fetchAsString = [OracleDB.CLOB];
OracleDB.outFormat = OracleDB.OUT_FORMAT_OBJECT;

// Initialize the database
export const initialize = async () => {
  connectionPool = await OracleDB.createPool(hrPool);
};

// Closing the database
export const close = async () => {
  await connectionPool.close();
};

// Execute the query
export const simpleExecutePlSql = async (
  statement: string,
  binds: OracleDB.BindParameters = [],
  opts: OracleDB.ExecuteOptions = {}
): Promise<OracleDB.Result<any>> => {
  let conn: OracleDB.Connection | null = null;
  try {
    conn = await connectionPool.getConnection();
    const result: OracleDB.Result<any> = await conn.execute(
      statement,
      binds,
      opts
    );
    return result;
  } catch (err) {
    throw err;
  } finally {
    if (conn) await conn!.close();
  }
};

export const resultSetExecute = async (
  statement: string,
  binds: OracleDB.BindParameters = [],
  opts: OracleDB.ExecuteOptions = {}
): Promise<any> => {
  let conn: OracleDB.Connection | null = null;
  opts.resultSet = true;

  try {
    conn = await connectionPool.getConnection();
    const result: OracleDB.Result<any> = await conn.execute(
      statement,
      binds,
      opts
    );
    let outBinds: any = {};
    await Promise.all(
      _.chain(result.outBinds)
        .map(async (value, key) => {
          if (typeof value?.getRow != "function") outBinds[key] = value;
          else {
            const row = await value.getRows(5000);
            outBinds[key] = row;
            await value.close();
          }
        })
        .value()
    );
    return outBinds;
  } catch (err) {
    throw err;
  } finally {
    if (conn) await conn!.close();
  }
};

export const executeManyPlSql = async (
  statement: string,
  binds: OracleDB.BindParameters[] = [],
  opts: OracleDB.ExecuteManyOptions = {}
): Promise<OracleDB.Results<any>> => {
  let conn: OracleDB.Connection | null = null;
  try {
    conn = await connectionPool.getConnection();
    const result: OracleDB.Results<any> = await conn.executeMany(
      statement,
      binds,
      opts
    );
    return result;
  } catch (err) {
    throw err;
  } finally {
    if (conn) await conn!.close();
  }
};
