import React from 'react';
import './faqs.css';


class Faqs extends  React.Component {
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
            
        <div className="qFaq">
            <div >
               <li> {this.props.question}</li>
            </div>
           
        </div>      
                      
                  
                  
              
        );
    }
  }
  export default Faqs;