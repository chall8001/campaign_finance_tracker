
const connection = require('../config/connection.js');


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
      });  

    app.post('/api/person', (req, res) => {
        console.log(req.body)
        connection.query('SELECT * FROM politicanNames WHERE CRPName = (?)', [req.body.name], (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            connection.end();
        
        })
        var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        console.log({ id: person});
        res.json("Hellow");
        })
    }
    
