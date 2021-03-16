const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
      });  

    app.post('/api/person', (req, res) => {
        res.json("received")
        console.log(req)
    })
}