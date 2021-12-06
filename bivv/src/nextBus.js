import React from 'react';
import c1IMG from './images/c1.svg'


class NextBus extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      

    }
 
    render(){
        return(
          <div className="NextBus">
           <img src={c1IMG} />
          </div>      
                      
                  
                  
              
        );
    }
  }
  export default NextBus;