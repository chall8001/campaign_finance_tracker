const mysql = require('mysql')
//create connection object 

//connection

if(process.env.JAWSDB_URL) {
var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: 'aRlo41ba',
    database: 'politican_db'
})
}


connection.connect((err) => {
    if (err){
        console.error(`error connecting: ${err.stack}`);
        return
    }
    console.log(`connected as id ${connection.threadId}`)
})


module.exports = connection;

