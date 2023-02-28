const express = require('express');
const app = express();




app.use('/', express.static(__dirname+'/public'));


app.get('/aboutMe/:hobby', (req, res) => {
    const par = req.params.hobby;
    if (par.match(/\d/)) {
        res.status(404).send('Bad request')
    } else {
        res.send(`${par}`);
    }
})

app.get('/pic', (req, res) => 
{
    res.sendFile(__dirname+'/public/pic.html')
}
);


app.get('/formData', (req, res) => {
    const query = req.query;
    console.log(query.email);
    // res.send("On the result page");
    res.send(`${query.email} sent you a messege ${query.messege}`);
})

app.listen(3001);