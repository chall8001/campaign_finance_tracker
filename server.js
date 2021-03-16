
//dependencies to ender and deploy an express server
const express = require('express')
const PORT = process.env.PORT || 3000;
// var app = express();


const app = express();
//express middleware
// server.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.static("views"));


require('./controllers/route_controller.js')(app);
require('./config/connection.js')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


