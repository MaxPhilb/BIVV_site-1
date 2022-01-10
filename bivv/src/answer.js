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

        console.log(this.props.parcours);
       
        return(
        <div className="answer">
            <div className='answerDesc' >
                
              {
                  this.props.rep ? this.props.rep : ""
              }
            </div>

            <div className='contenu' >
            
                
            {
            this.props.carto ? <Carto depart={this.props.carto} departure={this.props.departure} destination={this.props.carto} /> : ""
            }

              {
                this.props.parcours ? <Itineraire itineraire={this.props.parcours}  /> : ""
               } 
            </div>
           
        </div>
                      
                  
                  
              
        );
    }
  }
  export default Answer;