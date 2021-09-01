import {Link, useLocation} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams} from 'react-router';
import useGet from './useGet';

const Chapters = () => {
    const {SubjectID, BookID} = useParams();
    const {data: ChapterList, isLoading, error} = useGet('http://localhost:3001/api/get/chapters/' + SubjectID +'/'+ BookID);
    console.log("Chapter page SubjectID:", SubjectID);
    console.log("Chapter page BookID:", BookID);
    // const [booknameID, setbooknameID] = useState('');
    // const {BookID} = useParams();
    // const location = useLocation();
    // const {fromBooks} = location.state;
    // const [bID, setbID] = useState(null);
    // const [ChapterName, setChapterName] = useState('');
    // const [chapterPage, setchapterPage] = useState('');
    // const [ChapterList, setChapterList] = useState([]);
    // const [loading, setIsLoading] = useState(true);
//    React.useEffect(()=>
//    {
//        fetch(`http://localhost:3000/chapters/${BookID}`).then(setbID)
//    }, [BookID]);
    // useEffect(()=>{
    //      //const getChapters = () => {
    //     setTimeout(()=>{
    //     console.log(JSON.stringify(bookID.bookID));
    //         },10000);
    //             Axios.get(`http://localhost:3001/api/get/chapters/${bookID.bookID}`).then((response) => {
    //                 setChapterList(response.data);
    //                 setIsLoading(false); 
    //             }).catch((err)=>{
    //                 console.log(err);
    //             });
            
    //        // };
    
         
    // }, []);
   
        // const getBookID=(BookChapterID)=>{
        //         //setBookID(BookID);
        //         setBookChapterID(BookChapterID);
        //         console.log(BookChapterID);
        //     };

    return (  

        <div className="chapters">
            <h2>List of Chapters</h2>
            {isLoading && <div>Is loading</div>}
            { error && <div>{ error }</div> }
            {ChapterList&& <div> 
            {/* <button onClick={() => {getChapters()}}>Show Chapters</button>   */}
            
            {ChapterList.map((val)=> {
            return (
              <div className="flex-container">
              <div className="card question">
              <p>{val.ChapterName}</p>
              <button ><Link to={{
                    pathname: `/cards/${SubjectID}/${BookID}/${val.BookChapterID}`,
                    // state: {
                    //     fromBooks: true,
                    //     BookID: val.BookID,
                    //     BookChapterID: val.BookChapterID,
                    // }
                }}> 
                Get Cards {val.BookID}
                </Link></button>
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
 
export default Chapters;