import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import Books from './Books';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import Chapters from './Chapters';
import { useState } from "react";
import Subjects from './Subjects';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [bookID, setBookID] = useState(0);
const [bookChapterID, setBookChapterID] = useState(0);
const [subjectID, setSubjectID] = useState(0);
//(maybe pass all props in one object?)
const [cardInfo, setCardInfo] = useState({
      SubjectID: "0",
      BookID: "0",
      ChapterID: "0",
      CardID: "0"
});

//const [userID, setUserID] = useState(0);



  return (
    <Router>

      <div className="App">
          
          <Navbar />

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/subjects">
                <Subjects setSubjectID={setSubjectID}/>
              </Route>
              <Route path="/books">
                <Books subjectID={subjectID} setBookID={setBookID}/>
              </Route>
              <Route path="/chapters">
                <Chapters bookID={bookID} setBookChapterID={setBookChapterID}/>
              </Route>
              <Route path="/cards">
                <Cards bookChapterID={bookChapterID}/>
              </Route>
            </Switch>
            
          </div>
        
        </div>
    </Router>
    
  );
}

export default App;
