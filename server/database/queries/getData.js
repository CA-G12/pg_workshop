const connection = require("../config/connection");

const getData = () => {
  return connection.query("select * from users");
};

module.exports = getData;
