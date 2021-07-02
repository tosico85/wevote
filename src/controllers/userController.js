import mysql from "mysql";

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

function executeSql(query, callback) {
  connection.query(query, function (error, results, fields) {
  if (error) throw error;
  //console.log('The solution is: ', results[0].solution);

  callback(results);
  }
);

export const userController = (req, res)=>{

};