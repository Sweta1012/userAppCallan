var express = require('express'),
    cors = require('cors'),
    app = express();
const csv=require('csvtojson');

    app.use(cors({
        origin: 'http://localhost:3000'
    }));

    const csvFilePath='./src/data/user_database.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    app.get('/displayusers', function(req, res){
        res.send(jsonObj);
    });

    app.get('/user/:id', function(req, res){
        res.send(jsonObj.filter((item, index) => {
            return item.id == req.params.id;
        }));
    })

});


app.listen(4000, function(){
    console.log('server running on @ localhost:4000');
})