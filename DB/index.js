const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'expressjs',
    password: 'password',
    database: 'expressjs'
});

connection.connect((err) => {
    if(err){throw err;}
    console.log('connected to database...');
});
const db = {
    createTable: () => {
        const sql = "CREATE TABLE test_table (id INT AUTO_INCREMENT, firstname VARCHAR(80), lastname VARCHAR(80), PRIMARY KEY(id));"
        connection.query(sql, (err) => {
            if(err){throw err;}
            console.log('Table created successfully...');
        })
    }
};
module.exports = db;
/*connection.query('SELECT 1 + 1 AS solution', fuction(error, results, fields){
    if(error) throw error;
    console.log('the solution is: ', results[0].solution);
});*/
