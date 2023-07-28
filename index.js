const express = require('express');
const ejs = require('ejs'); //โหลดโมเดล ejs
const app = express();

app.set('view engine','ejs'); // ตั้งค่าให้เป็น engine สำหรับรันเท็มเพลต

app.get('/person',(request ,response)=>{
    response.render('person',{ // person = ชื่อไฟล์ veiws/person.ejs
        firstname : 'Jame',
        lastname: 'Bond',
        address: 'London UK',
        telephone : {tel:'02-800-8888', mobile:'085-590-5757'},
        city :{center:'bangkok', north:'chang-rai'}
    });
});

app.listen(8080);