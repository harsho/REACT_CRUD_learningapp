import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';
import { useState } from "react";
import Chapters from './Chapters';

const Books = (subjectID, {setBookID}) => {

    const [subjectnameID, setSubjectnameID] = useState('');
    const [BookName, setBookName] = useState('');
    const [BookAuthor, setBookAuthor] = useState('');
    const [Books, setBooks] = useState([]);

    const getBooks = () => {
        console.log(JSON.stringify(subjectID.subjectID));
        setSubjectnameID(subjectID.subjectID);
        console.log(subjectID);
           if(subjectnameID){
                Axios.get(`http://localhost:3001/api/get/books/${subjectnameID}`).then((response) => {
                    setBooks(response.data);
                });
            }
            };

    const getBookID=(BookID)=>{
        setBookID(BookID);
        console.log(BookID);
    };

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
            
            <div> 
            <button onClick={getBooks}>Show Books</button>  
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
                    pathname: '/chapters',
                    state: {
                        fromBooks: true,
                        BookID: val.BookID
                    }
                }}> 
                
                <button onClick={()=>(getBookID(val.BookID))}>Get Chapters {val.BookID}</button>
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
        </div> 
            
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