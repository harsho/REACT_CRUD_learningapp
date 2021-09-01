import { useState, useEffect } from 'react';
import Axios from 'axios';
const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    
        setTimeout(()=>{
        
         
            //console.log("subject name ID", subjectnameID);
            //if(subjectnameID){
                    Axios.get(url).then((response) => {
                        setData(response.data);
                        setIsLoading(false); 
                        setError(null);
                    }).catch((err)=>{
                        console.log(err);
                    });
            
        },1000); 
             
         
    }, []); 
    return {data, isLoading, error};
}
  export default useGet;