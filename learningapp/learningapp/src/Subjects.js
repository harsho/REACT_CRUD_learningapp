import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import useGet from "./useGet";

const Subjects = () => {

    const {data: subjectList, isLoading, error } = useGet("http://localhost:3001/api/get/subjects");
    //const [subjectList, setSubjectList] = useState([]);

// useEffect(()=>{
//     //const getSubjects = () => {
//         Axios.get("http://localhost:3001/api/get/subjects").then((response) => {
//             setSubjectList(response.data);
//         });
//     //};
//       }, []);

//     const submitCard = () => {
//         Axios.post("http://localhost:3001/api/insert", {
//             Question: Question,
//             Answer: Answer,
//         }).then(() => {
//             alert("successful insert");
//         });
//     };
  
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
    // const getSubjectID=(subjectID)=>{
    //     setSubjectID(subjectID);
    //     console.log(subjectID);

    // };



      return (
        <div className="home">
          <h2>Subjects</h2>
          { isLoading && <div>Loading...</div> }
          { error && <div>{ error }</div> }
          {subjectList&&<div> 
            {/* <button onClick={getSubjects}>Show Subjects</button>   */}
            {subjectList.map((val)=> {
            return (
              <div className="flex-container">
              <div className="card question">
            <p>{val.SubjectName}</p>
            <button >
            <Link to={{
                    pathname: `/books/${val.SubjectID}`,
                    // state: {
                    //     fromSubjects: true,
                    //     SubjectID: val.SubjectID
                    // }
                }}> 
                
                {val.SubjectName}{val.SubjectID}
                </Link>
              </button>
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
        </div>}
        </div>
         
      );
    }
 
export default Subjects;