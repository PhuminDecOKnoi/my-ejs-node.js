const express = require('express');
// const app = require('express')();
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');

app.get('/',(request ,response)=>{
    response.render('person',{
        firstname : 'Jame',
        lastname: 'Bond',
        address: 'London UK'
    });
});

app.listen(8088);