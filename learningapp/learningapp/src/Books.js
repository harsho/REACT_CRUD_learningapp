import {Link, useParams} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';
import { useEffect, useState } from "react";
import Chapters from './Chapters';
import useGet from './useGet';

const Books = () => {
    const {SubjectID} = useParams();
    const {data: Books, isLoading, error} = useGet('http://localhost:3001/api/get/books/' + SubjectID);
    console.log("Book page SubjectID:", SubjectID);
    // const [subjectnameID, setSubjectnameID] = useState('');
    //const [BookName, setBookName] = useState('');
    //const [BookAuthor, setBookAuthor] = useState('');
    // const [Books, setBooks] = useState([]);
    // const [loading, setIsLoading] = useState(true);
    //const [bookID, setBookID] = useState('');
    
    // useEffect(()=>{
    // //const getBooks = () => {
    //     setTimeout(()=>{
    //     console.log(JSON.stringify(subjectID.subjectID));
    //     setSubjectnameID(subjectID.subjectID);
    //      },10000); 
    //     console.log("subject name ID", subjectnameID);
    //        //if(subjectnameID){
    //             Axios.get(`http://localhost:3001/api/get/books/${subjectID.subjectID}`).then((response) => {
    //                 setBooks(response.data);
    //                 setIsLoading(false); 
    //             }).catch((err)=>{
    //                 console.log(err);
    //             });
    //         //}
    //        // };

             
         
    // }, []); 
    
    
    // const getBookID=(bookID)=>{
    //    setBookID(bookID);
    //     console.log(bookID);
    // };
    // const getChapters = (BookName) => {
    //     {
    //          Linkto 
    //             //Axios.get("http://localhost:3001/api/chapters").then((response) => {
    //                 //setBooks(response.data);
    //             });
    //         };

    return (  

        <div className="books">
            <h2>List of Books</h2>
            {isLoading && <div>Is loading</div>}
            { error && <div>{ error }</div> }
            {Books && <div> 
            
            {Books.map((val)=> {
            return (
              <div className="flex-container">
              <div className="card question">
            <p>{val.BookName}</p>
           
            </div>
            <div className="card answer">
               <p>{val.BookAuthor}</p>
            </div>
            {/* <button className="updatebtn" onClick={() => {getChapters(val.BookName)}}>Get Chapters</button> */}
            <div className="updatebtn">
                {/* <Link to= {`/chapters/${val.BookID}`}> */}
                <Link to={{
                    pathname: `/chapters/${SubjectID}/${val.BookID}`,
                    // state: {
                    //     fromBooks: true,
                    //     BookID: val.BookID
                    // }
                }}> 
                
                <button >Get Chapters {val.BookID}</button>
                </Link>
            </div>
            {/* <input type="text" id="updateInput" onChange={(event)=> {
              setNewCard(event.target.value);
            }}/>
            <button className="updatebtn" onClick={() => {updateCard(val.Question)}}>Update Card</button>
            <button className="updatebtn" onClick={() => {deleteCard(val.Question)}}>Delete Card</button> */}
            </div>
            );
            })}
        </div> }
            
            {/* {books.map( book => (
                <div className="book-preview" key={book.bookID} >
                    <Link to={`/books/${book.bookID}`}>
                        <h2>{book.bookName}</h2>
                        <p>Written by {book.bookAuthor}</p>
                    </Link>
                </div>
            ))} */}
        </div>

    );
}
 
export default Books;