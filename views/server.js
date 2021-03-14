const express = require('express')
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.static("public"));


app.listen(PORT, function(){
    console.log("app now listening at " + PORT)
});

const mysql = require('mysql')
//create connection object 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: 'aRlo41ba',
    database: 'politican_db'
})


connection.connect((err) => {
    if (err){
        console.error(`error connecting: ${err.stack}`);
        return
    }
    console.log(`connected as id ${connection.threadID}`)
})