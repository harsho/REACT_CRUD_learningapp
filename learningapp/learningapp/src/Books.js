import {Link} from 'react-router-dom';

const Books = ({books}) => {

    //const [bookName, setBookName] = useState('');
    //const [bookAuthor, setBookAuthor] = useState('');

    

    return (  

        <div className="books">
            <h2>List of Books</h2>
            
            <Link to="/cards">Finance 101</Link>
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