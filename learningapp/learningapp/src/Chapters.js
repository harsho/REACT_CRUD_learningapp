import {Link, useLocation} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useParams} from 'react-router';
import useGet from './useGet';

const Chapters = () => {
    const {SubjectID, BookID} = useParams();
    const {data: ChapterList, isLoading, error} = useGet('http://localhost:3001/api/get/chapters/' + SubjectID +'/'+ BookID);
    console.log("Chapter page SubjectID:", SubjectID);
    console.log("Chapter page BookID:", BookID);
    
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
              {/* <p>{val.ChapterName}</p> */}
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
            
           
            </div>
            {/* <div className="card answer">
              
            </div>*/}
            
            </div>
            );
            })}
        </div> }
            
        
        </div>

    );
}
 
export default Chapters;