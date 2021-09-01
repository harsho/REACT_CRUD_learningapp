import {Link, useLocation} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';
import React, { useState } from "react";
import { useParams} from 'react-router';

const Chapters = (bookID, {setBookChapterID}) => {
    const [booknameID, setbooknameID] = useState('');
    const {BookID} = useParams();
    const location = useLocation();
    const {fromBooks} = location.state;
    const [bID, setbID] = useState(null);
    const [ChapterName, setChapterName] = useState('');
    const [chapterPage, setchapterPage] = useState('');
    const [ChapterList, setChapterList] = useState([]);

//    React.useEffect(()=>
//    {
//        fetch(`http://localhost:3000/chapters/${BookID}`).then(setbID)
//    }, [BookID]);

    const getChapters = () => {
        console.log(JSON.stringify(bookID.bookID));
        setbooknameID(bookID.bookID);
        console.log(booknameID);
           if(booknameID){
                Axios.get(`http://localhost:3001/api/get/chapters/${booknameID}`).then((response) => {
                    setChapterList(response.data);
                });
            }
            };
    
            const getBookID=(BookChapterID)=>{
                //setBookID(BookID);
                setBookChapterID(BookChapterID);
                console.log(BookChapterID);
            };

    return (  

        <div className="chapters">
            <h2>List of Chapters</h2>
            
            <div> 
            <button onClick={() => {getChapters()}}>Show Chapters</button>  
            {ChapterList.map((val)=> {
            return (
              <div className="flex-container">
              <div className="card question">
              <p>{val.ChapterName}</p>
              <Link to={{
                    pathname: '/cards',
                    state: {
                        fromBooks: true,
                        BookID: val.BookID,
                        BookChapterID: val.BookChapterID,
                    }
                }}> 
                
                <button onClick={()=>(getBookID(val.BookChapterID))}>Get Cards {val.BookID}</button>
                </Link>
            <p>{val.ChapterName}</p>
           
            </div>
            <div className="card answer">
               {/* <p>{val.PageNumber}</p> */}
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
 
export default Chapters;