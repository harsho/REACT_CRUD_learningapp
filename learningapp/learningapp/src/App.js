import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import Books from './Books';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from './Cards';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>

      <div className="App">
          
          <Navbar />

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/books">
                <Books />
              </Route>
              <Route path="/cards">
                <Cards />
              </Route>
            </Switch>
            
          </div>
        
        </div>
    </Router>
    
  );
}

export default App;
