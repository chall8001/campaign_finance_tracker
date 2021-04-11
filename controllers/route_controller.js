
// const { response } = require('express');
const connection = require('../config/connection.js');


module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
      });  

    app.post('/api/person', (req, res) => {
        console.log(req.body)
         connection.query('SELECT * FROM politicanNames WHERE CRPName = (?)', [req.body.name], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.json(result);
            // connection.end();
        })
        })
    }
    
