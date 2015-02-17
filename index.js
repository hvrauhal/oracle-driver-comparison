var connectData = {
  hostname: process.env.ORACLE_ADDRESS,
  port: process.env.ORACLE_PORT,
  database: process.env.ORACLE_SERVICE_NAME,
  user: process.env.ORACLE_USERNAME,
  password: process.env.ORACLE_PASSWORD,
  connectString: (process.env.ORACLE_ADDRESS) + ':' + (process.env.ORACLE_PORT) + '/' + (process.env.ORACLE_SERVICE_NAME)
};

console.log("Using the following library paths:");
console.log("LD_LIBRARY_PATH=" + process.env.LD_LIBRARY_PATH);
console.log("OCI_HOME=" + process.env.OCI_HOME);
console.log("OCI_INCLUDE_DIR=" + process.env.OCI_INCLUDE_DIR);
console.log("OCI_INC_DIR=" + process.env.OCI_INC_DIR);
console.log("OCI_LIB_DIR=" + process.env.OCI_LIB_DIR);
console.log("DYLD_LIBRARY_PATH=" + process.env.DYLD_LIBRARY_PATH);
console.log("Connect data:", connectData);
console.log("--");

var q = "SELECT sessiontimezone, TO_DATE('01-JAN-2015') AS THE_DATE FROM DUAL";
console.log('Selecting:\n', q, '\n using both drivers:');
var oracle = require('oracle');
oracle.connect(connectData, function (err, connection) {
  if (err) {
    console.error("Error connecting to db:", err);
    return;
  }
  connection.execute(q, [], function (err, results) {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    console.log('Joe Ferner driver:', JSON.stringify(results));
    connection.close();
  });
});

var oracledb = require('oracledb');
oracledb.getConnection(
  connectData,
  function (err, connection) {
    if (err) {
      console.error('Error connecting to oracledb:', err.message);
      return;
    }
    connection.execute(q, [], {outFormat: oracledb.OBJECT}, function (err, results) {
      if (err) {
        console.error('Error executing query:', err.message);
        return;
      }
      console.log('OracleDB: ', JSON.stringify(results.rows));
    });
  });