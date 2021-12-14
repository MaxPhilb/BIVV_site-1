import React from 'react';
import './itineraire.css';
import StopBar from './stopBar';


class Itineraire extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       colorLine:"green",
       nameLine:"C2",
      };
      
      
    
    }
  
   
    render(){
        
        
        
       
        return(
        <div className="itineraire">
            <div className='itDep' >
                <div className='cible'>
                    <svg width="100%" height="100%" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8137 13.3636C17.6069 13.3636 14.1996 16.7809 14.1996 21C14.1996 25.2191 17.6069 28.6364 21.8137 28.6364C26.0205 28.6364 29.4278 25.2191 29.4278 21C29.4278 16.7809 26.0205 13.3636 21.8137 13.3636ZM38.8312 19.0909C37.9556 11.13 31.6549 4.81091 23.7172 3.93273V0H19.9102V3.93273C11.9725 4.81091 5.67187 11.13 4.79625 19.0909H0.875V22.9091H4.79625C5.67187 30.87 11.9725 37.1891 19.9102 38.0673V42H23.7172V38.0673C31.6549 37.1891 37.9556 30.87 38.8312 22.9091H42.7524V19.0909H38.8312V19.0909ZM21.8137 34.3636C14.4471 34.3636 8.48908 28.3882 8.48908 21C8.48908 13.6118 14.4471 7.63636 21.8137 7.63636C29.1803 7.63636 35.1384 13.6118 35.1384 21C35.1384 28.3882 29.1803 34.3636 21.8137 34.3636Z" fill="black"/>
                    </svg>
                </div>
                <div className='itDepText'>
                    Gares 13:39 
                </div>
                
            </div>
            
            <div className='itDepArret' >

                <div className='bus' >
                    <svg width="100%" height="100%" viewBox="0 0 36 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.699219 31.3337C0.699219 33.277 1.55796 35.0216 2.90111 36.2362V40.167C2.90111 41.3816 3.89196 42.3753 5.103 42.3753H7.30488C8.51592 42.3753 9.50677 41.3816 9.50677 40.167V37.9587H27.1219V40.167C27.1219 41.3816 28.1127 42.3753 29.3238 42.3753H31.5257C32.7367 42.3753 33.7275 41.3816 33.7275 40.167V36.2362C35.0707 35.0216 35.9294 33.277 35.9294 31.3337V9.25033C35.9294 1.52116 28.0467 0.416992 18.3143 0.416992C8.58198 0.416992 0.699219 1.52116 0.699219 9.25033V31.3337ZM8.40583 33.542C6.57826 33.542 5.103 32.0624 5.103 30.2295C5.103 28.3966 6.57826 26.917 8.40583 26.917C10.2334 26.917 11.7087 28.3966 11.7087 30.2295C11.7087 32.0624 10.2334 33.542 8.40583 33.542ZM28.2228 33.542C26.3953 33.542 24.92 32.0624 24.92 30.2295C24.92 28.3966 26.3953 26.917 28.2228 26.917C30.0504 26.917 31.5257 28.3966 31.5257 30.2295C31.5257 32.0624 30.0504 33.542 28.2228 33.542ZM31.5257 20.292H5.103V9.25033H31.5257V20.292Z" fill="black"/>
                    </svg>
                </div>
                <div className='itDepBusLogo' >

                    <svg height="100%" width="100%"   xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill={this.state.colorLine}/>
                    </svg>
                    <div className='itDepBusText' >
                        {this.state.nameLine}
                    </div>
                </div>
                <div className='itDepArretText' >
                        Gares
                </div>
            </div>
            <div className='itDepCom' >
                <div className='itLine' >
                    <div className='itLineBorder' >

                    </div>

                </div>
                <div className='itDepComText' >
                    Durée du trajet 6 arrêts
                </div>
                
            </div>
            <StopBar colorLine={this.state.colorLine} colorText="green" circleColor="green" hour="13:38" name="Gares" pmrImp="false" />
            
            <StopBar colorLine={this.state.colorLine} colorText="black" circleColor="white" hour="13:41" name="Félix Viallet" pmrImp="false" />

            <div className='resteStop'>
                <div className='itLine' >
                    <div className='itLineBorder' >

                    </div>

                </div>
                <div className='rSLine' >
                
                    <div className='rSCircle' style={{backgroundColor:this.state.colorLine,top: "4px"}}></div>
                    <div className='rSCircle' style={{backgroundColor:this.state.colorLine,top: "16px"}}></div>
                    <div className='rSCircle' style={{backgroundColor:this.state.colorLine,top: "28px"}}></div>
                    
                </div>
                <div className='rSText'>
                    (13 arrêts)
                </div>
            </div>

           
            
            <div className='itDepArret' >

                <div className='bus' >
                    <svg width="100%" height="100%" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3092 0C6.86745 0 0.848633 6.1035 0.848633 13.65C0.848633 23.8875 14.3092 39 14.3092 39C14.3092 39 27.7698 23.8875 27.7698 13.65C27.7698 6.1035 21.751 0 14.3092 0ZM14.3092 18.525C11.6556 18.525 9.50188 16.341 9.50188 13.65C9.50188 10.959 11.6556 8.775 14.3092 8.775C16.9629 8.775 19.1166 10.959 19.1166 13.65C19.1166 16.341 16.9629 18.525 14.3092 18.525Z" fill="black"/>
                    </svg>
                </div>
               
                <div className='itDepArretText' >
                       Maupertuis    14:50
                </div>

            </div>
            

            

           
        </div>
                      
                  
                  
              
        );
    }
  }
  export default Itineraire;