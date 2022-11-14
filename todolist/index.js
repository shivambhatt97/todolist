const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/mongoose');
const Tasks = require('./models/task');
const { urlencoded } = require('body-parser');

const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true}));



//set up view engine
app.set('view engine','ejs');
app.set('views','./views')
app.use(express.static('assets'));
app.use(express.urlencoded());
app.use('/',require('./routes'));
app.set('layout extractStyles',true);
app.set('layout extratScripts',true);





app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});


