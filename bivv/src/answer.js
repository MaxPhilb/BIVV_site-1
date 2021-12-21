import React from 'react';
import './answer.css';
import Carto from './carto';
import Itineraire from './itineraire';


class Answer extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      
      
    
    }
  
   
    render(){

        
       
        return(
        <div className="answer">
            <div className='answerDesc' >
                Voici votre itineraire
            </div>

            <div className='contenu' >
                
            {/* <Carto /> */}
              {<Itineraire  />  } 
            </div>
           
        </div>
                      
                  
                  
              
        );
    }
  }
  export default Answer;