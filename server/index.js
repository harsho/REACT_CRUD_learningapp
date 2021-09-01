const express = require ('express'); 
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'devvo',
    password: '{Ovved1!}',
    database: 'test'

});

//INSERT TEST
// app.get("/", (req, res)=>{
//     const sqlInsert = "INSERT INTO cards (Question, Answer) VALUES ('finance word','mumbo jumbo');"
//     db.query(sqlInsert, (err, result)=>{
//         res.send("hello world landing");
//     });
// });
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/get', (req, res)=> {
    const sqlSelect = "SELECT * FROM cards";
    db.query(sqlSelect, (err, result) => {
        //console.log(result);
        res.send(result);
    });
});


app.post("/api/insert", (req, res)=> {
    const Question =  req.body.Question;
    const Answer = req.body.Answer;

    const sqlInsert =
    "INSERT INTO cards (Question, Answer) VALUES (?,?);";
    db.query( sqlInsert, [Question, Answer], (err, result) => {
      console.log(result);  
    });

});

app.delete("/api/delete/:Question", (req, res) =>{
    const cardname = req.params.Question;
    const sqlDelete = "DELETE FROM cards WHERE Question = ?";

    db.query(sqlDelete, cardname, (err, result) => {
       if (err) console.log(err);

    });
});

app.put("/api/update", (req, res) => {
    const cardquestion = req.body.Question;
    const cardanswer = req.body.Answer;
    console.log(cardquestion);
    console.log(cardanswer);
    const sqlUpdate = "UPDATE cards SET Answer = ? WHERE Question = ?";

    db.query( sqlUpdate, [cardanswer, cardquestion], (err, result) => {
       if (err) {
           console.log(err);
       }
       else{
           res.send(result);
           console.log(result);
       }

    });
});

app.get("/", (req, res)=>{
    res.send("hello world landing");
});


app.listen(3001, () => { 
    console.log("running on port 3001");
}

);