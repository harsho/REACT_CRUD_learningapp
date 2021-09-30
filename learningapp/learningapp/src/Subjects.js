import {Link} from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import useGet from "./useGet";

const Subjects = () => {
    const {data: subjectList, isLoading, error } = useGet("http://localhost:3001/api/get/subjects");

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
            
            <button >
            <Link to={{
                    pathname: `/books/${val.SubjectID}`,
                    // state: {
                    //     fromSubjects: true,
                    //     SubjectID: val.SubjectID
                    // }
                }}> 
                
                {val.SubjectName}
                </Link>
              </button>
            </div>
            
            </div>
            );
            })}
        </div>}
        </div>
         
      );
    }
 
export default Subjects;