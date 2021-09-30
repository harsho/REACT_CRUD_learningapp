import { useLocation  } from 'react-router';
import { useState } from 'react';
import Axios from 'axios';
var qs = require('qs');
const LearningGame = () => {
   
   // const [CardID, setCardID] = useState("");
   let location = useLocation();
   //const [cardsList, setCardsList] = useState({});
   const [load, setLoad] = useState(true);
   const [displayCards, setDisplayCards] = useState(false);
   const [cardsList, setCardsList] = useState([]);
    console.log(location.state.selectedCardsList);

    let cards = location.state.selectedCardsList.filter(function(f)
        {   
            
            return f.CardID > 0;
            
        });
        console.log('Cards are:', cards);

        const getCards = () => {
        Axios.get('http://localhost:3001/api/get/learning/', {
            params: {
              cardIds: (1,7,3)
             }}).then((response) => {
                console.log(response.data);
                setCardsList(response.data);
                setLoad(false);
            }).catch((err)=>{
                console.log(err);
            });
        };
             
            // paramsSerializer: params => {
            //   return qs.stringify(params)
            // }
          //}
          
          


    //     const getCards = () => {
    //     Axios.get(`http://localhost:3001/api/get/learning/${cards}`).then((response) => {
    //         setCardsList(response.data);
    //         setLoad(false);
    //     });
    // };

    // const getCardList = (e) => {
    //     //const newCardsList = selectedCards.concat({CardID})
    //     //setSelectedCards(newCardsList)
    //     //setCardsList(cards);
    //    // const newCardsList = cardsList.slice(1);
        
    //     //setCardsList(newCardsList);
        
    //     cardsList.map((item)=>{
    //         if(item.CardID== undefined){
    //             console.log('null value caught');
    //         }
    //         else{
    //         console.log(item.CardID);
    //         setDisplayCards(true);
    //         setLoad(false);
    //     }
        
    //     });
        
    //   }
    // console.log(cardsList.CardID);
    return (  
        <div className="home">
          <h2>Learning</h2>
          <button onClick={()=> {getCards()}}>cards get</button>
          {load && <div>Is loading</div>}
          {cardsList &&
          <div>{cardsList.map((val)=> {

            return(<h1>{val.CardID}</h1>);
            
          })
          } 
         
           </div>
            }
        </div>
    );
}
 
export default LearningGame;