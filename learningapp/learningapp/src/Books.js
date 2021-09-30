import {Link, useParams} from 'react-router-dom';
import useGet from './useGet';

const Books = () => {
    const {SubjectID} = useParams();
    const {data: Books, isLoading, error} = useGet('http://localhost:3001/api/get/books/' + SubjectID);
    console.log("Book page SubjectID:", SubjectID);
   

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
             </div>
            );
            })}
        </div> }
            
            
        </div>

    );
}
 
export default Books;