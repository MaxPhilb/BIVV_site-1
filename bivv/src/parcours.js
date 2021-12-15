import React from 'react';
import './parcours.css';
import StopBar from './stopBar';


class Parcours extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      
      
    
    }
  
   
    render(){
        
        let trajet=[];
        for(var i=0;i<this.props.listArrets.length-1;i++){

            let element=this.props.listArrets[i];
            let position="none";
            console.log(i);
            console.log(element); 
            let textcolor="black";
            let circlecolor="white";
            if(i==0)
            {
                textcolor="green";
                circlecolor="green";
                position="first";
            }
            
            // Affichage
            trajet.push( <StopBar position={position} colorLine={this.props.colorLine} colorText={textcolor} circleColor={circlecolor} hour={element.hour} name={element.name} pmrImp={element.pmrImp} />)

                
        }

        let lastStop=this.props.listArrets[this.props.listArrets.length-1];
       
       
        return(
            <div>
                <div className='itDepArret' >

                        <div className='bus' >
                            <svg width="100%" height="100%" viewBox="0 0 36 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.699219 31.3337C0.699219 33.277 1.55796 35.0216 2.90111 36.2362V40.167C2.90111 41.3816 3.89196 42.3753 5.103 42.3753H7.30488C8.51592 42.3753 9.50677 41.3816 9.50677 40.167V37.9587H27.1219V40.167C27.1219 41.3816 28.1127 42.3753 29.3238 42.3753H31.5257C32.7367 42.3753 33.7275 41.3816 33.7275 40.167V36.2362C35.0707 35.0216 35.9294 33.277 35.9294 31.3337V9.25033C35.9294 1.52116 28.0467 0.416992 18.3143 0.416992C8.58198 0.416992 0.699219 1.52116 0.699219 9.25033V31.3337ZM8.40583 33.542C6.57826 33.542 5.103 32.0624 5.103 30.2295C5.103 28.3966 6.57826 26.917 8.40583 26.917C10.2334 26.917 11.7087 28.3966 11.7087 30.2295C11.7087 32.0624 10.2334 33.542 8.40583 33.542ZM28.2228 33.542C26.3953 33.542 24.92 32.0624 24.92 30.2295C24.92 28.3966 26.3953 26.917 28.2228 26.917C30.0504 26.917 31.5257 28.3966 31.5257 30.2295C31.5257 32.0624 30.0504 33.542 28.2228 33.542ZM31.5257 20.292H5.103V9.25033H31.5257V20.292Z" fill="black"/>
                            </svg>
                        </div>
                        <div className='itDepBusLogo' >

                            <svg height="100%" width="100%"   xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill={this.props.colorLine}/>
                            </svg>
                            <div className='itDepBusText' >
                                {this.props.nameLine}
                            </div>
                        </div>
                        <div className='itDepArretText' >
                                {this.props.listArrets[0].name}
                        </div>
                    </div>
                    <div className='itDepCom' >
                        <div className='itLine' >
                            <div className='itLineBorder' >

                            </div>

                        </div>
                        <div className='itDepComText' >
                            {this.props.commentIt}
                        </div>
                        
                    </div>

                    {trajet }
                

                    {this.props.tMStop &&
                        <div className='resteStop'>
                            <div className='itLine' >
                                <div className='itLineBorder' >

                                </div>

                            </div>
                            <div className='rSLine' >
                            
                                <div className='rSCircle' style={{backgroundColor:this.props.colorLine,top: "4px"}}></div>
                                <div className='rSCircle' style={{backgroundColor:this.props.colorLine,top: "16px"}}></div>
                                <div className='rSCircle' style={{backgroundColor:this.props.colorLine,top: "28px"}}></div>
                                
                            </div>
                            <div className='rSText'>
                                {this.props.tMText}
                            </div>
                        </div>
                    }
                
                <StopBar position="last" colorLine={this.props.colorLine} colorText="black" circleColor="white" hour={lastStop.hour} name={lastStop.name} pmrImp={lastStop.pmrImp} />    
            </div>
              
        );
    }
  }
  export default Parcours;