const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');

app.get('/',(request ,response)=>{
    response.render('person',{
        firstname : 'Jame',
        lastname: 'Bond',
        address: 'London UK',
        telephone : {tel:'02-800-8888', mobile:'085-590-5757'},
        city :{center:'bangkok', north:'chang-rai'}
    });
});

app.listen(8088);