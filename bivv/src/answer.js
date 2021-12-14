import React from 'react';
import './answer.css';


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
                voici votre itineraire
            </div>

            <div className='contenu' >
                contenu
            </div>
           
        </div>
                      
                  
                  
              
        );
    }
  }
  export default Answer;