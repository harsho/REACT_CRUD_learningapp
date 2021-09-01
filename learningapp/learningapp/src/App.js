import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import Books from './Books';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import Chapters from './Chapters';
import { useState } from "react";
import Subjects from './Subjects';
import NotFound from './Notfound';
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
// (/:SubjectID)(/:BookID)(/:BookChapterID)(/:CardID)


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
                {/* <Subjects setSubjectID={setSubjectID}/> */}
                <Subjects />
              </Route>
              <Route path="/books/:SubjectID">
                {/* <Books subjectID={subjectID} setBookID={setBookID}/> */}
                <Books />
              </Route>
              <Route path="/chapters/:SubjectID/:BookID">
                {/* <Chapters bookID={bookID} setBookChapterID={setBookChapterID}/> */}
                <Chapters />
              </Route>
              <Route path="/cards/:SubjectID/:BookID/:BookChapterID">
                <Cards />
              </Route>
              <Route path="*">
                <NotFound />
                </Route> 
            </Switch>
            
          </div>
        
        </div>
    </Router>
    
  );
}

export default App;
