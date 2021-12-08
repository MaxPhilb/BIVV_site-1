import React from 'react';
import './questions.css';

class Questions extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      
      
      this.handleChange=this.handleChange.bind(this);

    }
  
   
  
  
  
    
    handleChange(event){
      
     
      
    }
   
    render(){
        return(
            
        <div className="questions">
            <div className='QTitle' >
                Bonjour, comment puis je vous aider ?
            </div>
            <div className='QLogo' >
                <svg width="194" height="194" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M97 108.842C105.063 108.842 111.523 102.495 111.523 94.6316L111.571 66.2105C111.571 58.3474 105.063 52 97 52C88.9371 52 82.4286 58.3474 82.4286 66.2105V94.6316C82.4286 102.495 88.9371 108.842 97 108.842ZM122.743 94.6316C122.743 108.842 110.406 118.789 97 118.789C83.5943 118.789 71.2571 108.842 71.2571 94.6316H63C63 110.832 76.2114 124.142 92.1429 126.463V142H101.857V126.463C117.789 124.189 131 110.832 131 94.6316H122.743Z" fill="#5B9DC3"/>
                <circle cx="97" cy="97" r="70.5" stroke="#A2D3EE" stroke-width="7"/>
                <circle cx="97" cy="97" r="93.5" stroke="#A2D3EE" stroke-opacity="0.22" stroke-width="7"/>
                <circle cx="97" cy="97" r="81.5" stroke="#A2D3EE" stroke-opacity="0.49" stroke-width="7"/>
                </svg>

            </div>
            <div className='Qdes' >
                Appuyer de nouveau sur le bouton et posez votre question
            </div>
            <div className='QFAQ'>

            </div>
            
        </div>      
                      
                  
                  
              
        );
    }
  }
  export default Questions;