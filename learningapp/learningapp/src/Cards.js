import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import useGet from './useGet';
import { useParams } from 'react-router';

const Cards = (bookID, bookChapterID) => {
  const {SubjectID, BookID, BookChapterID} = useParams();
  const {data: cardsList, isLoading, error} = useGet('http://localhost:3001/api/get/cards/' + SubjectID +'/'+ BookID+'/'+ BookChapterID);
  console.log("Card page SubjectID:", SubjectID);
  console.log("Card page BookID:", BookID);
  console.log("Card page BookChapterID:", BookChapterID);
    //const {error, isPending, data: books} = ;
    // const [Id, setId] = useState(int);
    const [Question, setQuestion] = useState("");
    const [Answer, setAnswer] = useState("");
    const [newCard, setNewCard] = useState("");
    // const [cardsList, setCardsList] = useState([]);

    const submitCard = () => {
        Axios.post("http://localhost:3001/api/insert", {
            Question: Question,
            Answer: Answer,
        }).then(() => {
            alert("successful insert");
        });
    };

    // const getCards = () => {
    //     Axios.get("http://localhost:3001/api/get").then((response) => {
    //         setCardsList(response.data);
    //     });
    // };

    const deleteCard = (cardQuestion) => {
      Axios.delete(`http://localhost:3001/api/delete/${cardQuestion}`);
  };

  const updateCard = (cardQuestion) => {
    Axios.put("http://localhost:3001/api/update/", { Question: cardQuestion, Answer: newCard }).then(
      (response) => {
        alert("UPDATE!");
        //getCards();
        // setCards(
        //   Cards.map((val)=> {
        //   return val.Question == Question
        //   ? {
        //     Question: val.Question,
        //     Answer: val.Answer,
        //   }
        //   : val;

        // })
        // );  
  });
  
};


    const handleClick = (e) => {
        console.log('hello', e);
      }
    
      const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
      }
      
      const handleMathClick = (e) => {
        console.log('Math', e);
      }

      const handleScienceClick = (e) => {
        console.log('Science', e);
      }

      const handleBusinessClick = (e) => {
        console.log('Business', e);
      }


      return (
        <div className="cards">
          <h2>Cards</h2>
          {/* <button onClick={handleClick}>Click me</button>
          <button onClick={(e) => handleClickAgain('user', e)}>Click me again</button> */}
        <div>
            {/* <ListGroup as="ul"> 
                <ListGroup.Item as="li" active>Math</ListGroup.Item>
                <ListGroup.Item as="li" >Business</ListGroup.Item>
                <ListGroup.Item as="li" >Computer Science</ListGroup.Item>
            </ListGroup> */}
            {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Subject
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={handleMathClick}>Math</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={handleBusinessClick}>Business</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={handleScienceClick}>Science</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
        </div>  
        <div> 
            {/* <button onClick={getCards}>Show Cards</button>   */}
            {isLoading && <div>Is loading</div>}
            { error && <div>{ error }</div> }
            {cardsList &&
            <div> {cardsList.map((val)=> {
            return (
              <div className="flex-container">
              <div className="card question">
            <p>{val.Question}</p>
           
            </div>
            <div className="card answer">
               <p>{val.Answer}</p>
            </div>
            
            <input type="text" id="updateInput" onChange={(event)=> {
              setNewCard(event.target.value);
            }}/>
            <button className="updatebtn" onClick={() => {updateCard(val.Question)}}>Update Card</button>
            <button className="updatebtn" onClick={() => {deleteCard(val.Question)}}>Delete Card</button>
            </div>
            );
            })}
            </div>}
        </div>
        </div>
         
      );
    }
 
export default Cards;