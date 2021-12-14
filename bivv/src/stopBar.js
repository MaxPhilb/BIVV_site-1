import React from 'react';
import './stopBar.css';


class StopBar extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      
      
    
    }
  
   
    render(){
        
        
        
       
        return(
        <div className='stopBar' >
            <div className='stbLine' >
                <div className='stbLineBorder' >
                    
                </div>

            </div>
            <div className='stbLineStop' >
                
            </div>
            <div className='stbComText' >
                Durée du trajet 6 arrêts
            </div>
            
        </div>
                      
                  
                  
              
        );
    }
  }
  export default StopBar;