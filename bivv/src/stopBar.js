import React from 'react';
import './stopBar.css';
import pmrBar from './images/pmrbar.png'


class StopBar extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      
      
    
    }
  
   
    render(){
        
        let topBar="";
        let topCircle="";
        let heightBar="100%";
        if(this.props.position=="first"){
            topBar="14px";
            topCircle="-2px";
        }
        if(this.props.position=="last"){
            
            heightBar="58%";
            topCircle="14px";
        }
        
       
        return(
        <div className='stopBar' >
            <div className='stbLine' >
                <div className='stbLineBorder' >
                    
                </div>

            </div>
            <div className='stbLineStop' >
                <div className='stbLineStopBar' style={{backgroundColor:this.props.colorLine,top:topBar, height:heightBar}} >
                <div className='stbLineStopCircle' style={{backgroundColor:this.props.circleColor,top:topCircle}}>

                </div>

                </div>
            </div>
            <div className='stbHour' style={{color: this.props.colorText}}>
                    {this.props.hour}
            </div>
            <div className='stbStopName' style={{color: this.props.colorText}} >
                {this.props.name}
            </div>
            {this.props.pmrImp==="true" &&
            <div className='stbStopPMR' >
                <img src={pmrBar} alt="pmr"/>

            </div>
            }
            
        </div>
                      
                  
                  
              
        );
    }
  }
  export default StopBar;