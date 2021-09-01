import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const Subjects = ({setSubjectID}) => {

    //const {error, isPending, data: books} = ;
    //const [Id, setId] = useState(int);
    // const [Question, setQuestion] = useState("");
    // const [Answer, setAnswer] = useState("");
    // const [newCard, setNewCard] = useState("");
    const [subjectList, setSubjectList] = useState([]);

//     const submitCard = () => {
//         Axios.post("http://localhost:3001/api/insert", {
//             Question: Question,
//             Answer: Answer,
//         }).then(() => {
//             alert("successful insert");
//         });
//     };

    const getSubjects = () => {
        Axios.get("http://localhost:3001/api/get/subjects").then((response) => {
            setSubjectList(response.data);
        });
    };

//     const deleteCard = (cardQuestion) => {
//       Axios.delete(`http://localhost:3001/api/delete/${cardQuestion}`);
//   };

//   const updateCard = (cardQuestion) => {
//     Axios.put("http://localhost:3001/api/update/", { Question: cardQuestion, Answer: newCard }).then(
//       (response) => {
//         alert("UPDATE!");
//         getCards();
//         // setCards(
//         //   Cards.map((val)=> {
//         //   return val.Question == Question
//         //   ? {
//         //     Question: val.Question,
//         //     Answer: val.Answer,
//         //   }
//         //   : val;

//         // })
//         // );  
//   });
  
// };
    const getSubjectID=(subjectID)=>{
        setSubjectID(subjectID);
        console.log(subjectID);

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
        <div className="home">
          <h2>Subjects</h2>
         
       
        <div> 
            <button onClick={getSubjects}>Show Subjects</button>  
            {subjectList.map((val)=> {
            return (
              <div className="flex-container">
              <div className="card question">
            <p>{val.SubjectName}</p>
            <Link to={{
                    pathname: '/books',
                    state: {
                        fromSubjects: true,
                        SubjectID: val.SubjectID
                    }
                }}> 
                
                <button onClick={()=>(getSubjectID(val.SubjectID))}>Get Books {val.SubjectID}</button>
                </Link>
            </div>
            {/* <div className="card answer">
               <p>{val.Answer}</p>
            </div>
            
            <input type="text" id="updateInput" onChange={(event)=> {
              setNewCard(event.target.value);
            }}/>
            <button className="updatebtn" onClick={() => {updateCard(val.Question)}}>Update Card</button>
            <button className="updatebtn" onClick={() => {deleteCard(val.Question)}}>Delete Card</button> */}
            </div>
            );
            })}
        </div>
        </div>
         
      );
    }
 
export default Subjects;