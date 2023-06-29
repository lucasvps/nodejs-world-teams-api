import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "controles843",
  database: "db_world_cup",
});

connection.connect();

export default connection;
