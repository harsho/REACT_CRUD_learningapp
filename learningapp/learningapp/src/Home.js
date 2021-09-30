import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const Home = () => {

    const handleClick = (e) => {
        console.log('hello', e);
      }
    
      const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
      }
      
     

      return (
        <div className="home">
          <h2>Homepage</h2>
          <button onClick={handleClick}><Link to="/subjects"> Subjects</Link></button>
          <button onClick={(e) => handleClickAgain('user', e)}>Click me again</button>
        <div>
           
            {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Subject
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={handleMathClick}>
                      <Link to="/Books"> Math</Link>
                     </Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={handleBusinessClick}>
                    <Link to="/Books"> Business</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={handleScienceClick}>
                    <Link to="/Books"> Science</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
        </div>  
       
        </div>
         
      );
    }
 
export default Home;