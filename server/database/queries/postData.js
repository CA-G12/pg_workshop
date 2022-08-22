const connection = require("../config/connection");

const postData = ({ name, location }) => {
  const sql = {
    text: `insert into users(name, location) values($1, $2)`,
    values: [name, location],
  };

  //   return connection.query(sql);
  return connection.query(
    `insert into users(name, location) values($1, $2) returning *`,
    [name, location]
  );
};

module.exports = postData;
