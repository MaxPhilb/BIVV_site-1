import React from 'react';
import './nextBus.css'
import c1IMG from './images/c1.svg'


class NextBus extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      

    }
 
    render(){
        let pertDis="";
        if(this.props.dirPert && this.props.dirPert!=""){
            pertDis=   <div className='NBDIRPERT'> 
                    <div className='NBDIRPERTLOGO'>
                        <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 11.8506V19.6006" stroke="#D55B17" stroke-width="2" stroke-linecap="round"/>
                            <path d="M16.5 25.0254V25.8004" stroke="#D55B17" stroke-width="2" stroke-linecap="round"/>
                            <path d="M1.3589 27.3751L13.9421 2.63098C15.0473 0.45634 17.9567 0.45634 19.0603 2.63098L31.6419 27.3751C32.6975 29.4583 31.2932 32.0003 29.0797 32.0003H3.91801C1.70611 32.0003 0.300225 29.4583 1.36045 27.3751H1.3589Z" stroke="#D55B17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                        </svg>
                    </div>
                    <div className='NBDIRPERTTEXT'> {this.props.dirPert}</div>
                    </div>;
        }
        

        return(
          <div className="NextBus">
             
           <div className='NBIMG' >
            <svg  viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="47.5" cy="47.5" r="47.5" fill={this.props.colorLine}/>
            </svg>
            <div className='NBLineName'>
                {this.props.lineName}
            </div>

            </div>
           <div className='NBDIR'>
                <div className='NBDIRTEXT'>
                    {this.props.dir}
                </div>
                
                    { pertDis}
                
           </div>
           <div className='NBPert'>
            <svg width="94" height="55" viewBox="0 0 94 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="94" height="55" rx="13" fill={this.props.colorPert}/>
            </svg>
            
            <div className='NBPertText'>

                {this.props.pertText}
            </div>

           </div>
  
            <div className='NBH NBHO1'>
                <div className='NBHTOP ' >
                    <div className="NBHTOPTEXT" >
                        {this.props.HO1}
                    </div>
                </div>
                
                <div className='NBHBOTTOM ' style={{  backgroundColor: this.props.colorHO1}}>
                    <div className="NBHBOTTOMTEXT" >
                        {this.props.HO1PERT}
                    </div>
                </div>
                

            </div>

            <div className='NBH NBHO2'>
                <div className='NBHTOP ' >
                    <div className="NBHTOPTEXT" >
                        {this.props.HO2}
                    </div>
                </div>
                <div className='NBHBOTTOM ' style={{  backgroundColor: this.props.colorHO2}} >
                    <div className="NBHBOTTOMTEXT" >
                        {this.props.HO2PERT}
                    </div>
                </div>

            </div>
            


          </div>      
                      
                  
                  
              
        );
    }
  }
  export default NextBus;