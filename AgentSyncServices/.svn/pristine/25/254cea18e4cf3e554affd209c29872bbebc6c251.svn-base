const hrPool = {
  user: process.env.DB_USER || "XXPM_TEST",
  password: process.env.DB_PASSWORD || "omniyat123",
  connectString:
    process.env.DB_CONNECTION_STRING ||
    "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=144.21.67.79)(PORT=1533))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=omnipdb1.606532292.oraclecloud.internal)))",
  poolMin: process.env.DB_POOL_MIN ? parseInt(process.env.DB_POOL_MIN, 10) : 1,
  poolMax: process.env.DB_POOL_MAX ? parseInt(process.env.DB_POOL_MAX, 10) : 2,
  poolIncrement: process.env.DB_POOL_INC
    ? parseInt(process.env.DB_POOL_INC, 10)
    : 1,
};

export default hrPool;
