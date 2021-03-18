
const connection = require('../config/connection.js');


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
      });  

    app.post('/api/person', (req, res) => {
        res.json("received")
        console.log(req.body)
        connection.query('SELECT * FROM politicanNames WHERE CRPName = (?)', [req.body.name], (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            connection.end();
        
        })
        
        })
    }
    
