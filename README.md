# Comparison of node.js oracle drivers

1. Download Oracle drivers and use `setenv.sh` to set environment variables before `npm install`.
2. Then set the environment variables used by `index.js`.
3. `npm install && npm test`

The difference in dates can be seen in the output:

```
➜  oracle-driver-comparison  node index.js
Using the following library paths:
LD_LIBRARY_PATH=undefined
OCI_HOME=[...]/instantclient_11_2
OCI_INCLUDE_DIR=[...]/instantclient_11_2/sdk/include
OCI_INC_DIR=[...]/instantclient_11_2/sdk/include
OCI_LIB_DIR=[...]/instantclient_11_2
DYLD_LIBRARY_PATH=[...]/instantclient_11_2
Connect data: { hostname: '[...]',
  port: '[...]',
  database: '[...]',
  user: '[...]',
  password: '[...]',
  connectString: '[...]' }
--
Selecting:
 SELECT sessiontimezone, TO_DATE('01-JAN-2015') AS THE_DATE FROM DUAL
 using both drivers:
OracleDB:  [{"SESSIONTIMEZONE":"+02:00","THE_DATE":"2014-12-31T22:00:00.000Z"}]
Joe Ferner driver: [{"SESSIONTIMEZONE":"+02:00","THE_DATE":"2015-01-01T00:00:00.000Z"}]
```
