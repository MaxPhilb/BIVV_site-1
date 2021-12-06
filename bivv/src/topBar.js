import React from 'react';
import './topBar.css';

class TopBar extends  React.Component {
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
          <div className="topBar">
            <div className='leftTopBar'>
              {this.props.arret}
            </div>
            <div className='rightTopBar'>
              <div className='dateTopBar'>
                {this.props.date}
              </div>
             <div className='hourTopBar'>
               <p>{this.props.hour}</p>
             </div>
            </div>
            
          </div>      
                      
                  
                  
              
        );
    }
  }
  export default TopBar;