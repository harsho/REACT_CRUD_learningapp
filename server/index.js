const express = require ('express'); 
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'USERNAME',
    password: 'XXXXXXXX',
    database: 'learningapp'

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


///////////////////// Subjects CRUD //////////////////////
app.get('/api/get/subjects', (req, res)=> {
    const sqlSelect = "SELECT * FROM Subject";
    db.query(sqlSelect, (err, result) => {
        //console.log(result);
        res.send(result);
    });
});


app.post("/api/insert/subject", (req, res)=> {
    const UserID =  req.body.userID;
    const SubjectName = req.body.subjectName;

    const sqlInsert =
    "INSERT INTO Subject (UserID, SubjectName) VALUES (?,?);";
    db.query( sqlInsert, [UserID, SubjectName], (err, result) => {
      console.log(result);  
    });

});

app.delete("/api/delete/:Subject", (req, res) =>{
    const SubjectName = req.params.subjectName;
    const sqlDelete = "DELETE FROM Subject WHERE SubjectName = ?";

    db.query(sqlDelete, SubjectName, (err, result) => {
       if (err) console.log(err);

    });
});

app.put("/api/update/Subject", (req, res) => {
    const SubjectName = req.body.subjectName;
    //const cardanswer = req.body.Answer;
    //console.log(cardquestion);
    //console.log(cardanswer);
    const sqlUpdate = "UPDATE cards SET SubjectName = ? WHERE SubjectName = ?";

    db.query( sqlUpdate, [SubjectName, SubjectName], (err, result) => {
       if (err) {
           console.log(err);
       }
       else{
           res.send(result);
           console.log(result);
       }

    });
});

///////////////////// Books CRUD //////////////////////
//Only get is correct right now

app.get('/api/get/books/:subjectnameID', (req, res)=> {
    const sqlSelect = "SELECT * FROM Books WHERE SubjectID = ?";
    const SubjectID = req.params.subjectnameID
    db.query(sqlSelect, [SubjectID], (err, result) => {
        if (err) {
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
});


app.post("/api/insert/books", (req, res)=> {
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

///////////////////// Chapters CRUD //////////////////////
//Only get is correct right now
app.get('/api/get/chapters/:booknameID', (req, res)=> {
    const sqlSelect = "SELECT * FROM Chapters WHERE BookID = ?";
    const BookID = req.params.booknameID;
    console.log(BookID);
    db.query(sqlSelect, [BookID],(err, result) => {
        if (err) {
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
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


///////////////////// CARDS CRUD //////////////////////
app.get('/api/get', (req, res)=> {
    const sqlSelect = "SELECT * FROM Cards";
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