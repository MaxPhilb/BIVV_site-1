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
        
        
        
       
        return(
        <div className='stopBar' >
            <div className='stbLine' >
                <div className='stbLineBorder' >
                    
                </div>

            </div>
            <div className='stbLineStop' >
                <div className='stbLineStopBar' style={{backgroundColor:this.props.colorLine}} >
                <div className='stbLineStopCircle' style={{backgroundColor:this.props.circleColor}}>

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