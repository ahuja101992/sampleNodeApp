var express = require('express')
var router = express.Router()

var con = require('../dbCon')
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected in route!");
//   });
router.use(function timeLog (req, res,next) {
    console.log('Time: ', Date.now())
    next();
  })
router.get('/', (req, res)=> {
    res.send("test url success");
    // res.status(200).json({ message: "Connected!" }).send("test url success.");
});
router.get('/getAllPersons', (req, res)=> {
    let getAll= "select * from testapp.Persons;"

    con.query(getAll, (err, result)=>{
        if (err) throw err;
        res.status(200).json(result);
    })
});
router.get('/getPerson/:id', (req, res)=> {
    let id = req.params.id;
    let getPerson= `select * from testapp.Persons where PersonId =${id};`
    console.log(getPerson);
    con.query(getPerson, (err, result)=>{
        if (err) throw err;
        res.status(200).json(result);
    })
    // res.send("test url success");
    // res.status(200).json({ message: "Connected!" }).send("test url success.");
});
router.post('/addPerson',(req, res)=>{
    let addPersonQuery= `INSERT INTO testapp.Persons (PersonId, LastName, FirstName, Address, City) VALUES (${req.body.PersonId},"${req.body.LastName}","${req.body.FirstName}","${req.body.Address}","${req.body.City}" );`
    console.log(addPersonQuery);
    con.query(addPersonQuery, (err, result)=>{
        if (err) throw err;
        res.status(200).json(result);
    })
})

router.put('/updatePerson/:id', (req, res)=>{
    let updatePersonQuery=`update testapp.Persons set ${req.body.UpdateField}="${req.body.UpdateValue}" where PersonId=${req.params.id}`;
    console.log(updatePersonQuery);
    con.query(updatePersonQuery, (err, result)=>{
        if (err) throw err;
        res.status(200).json(result);
    })
})

module.exports = router