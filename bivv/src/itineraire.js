import React from 'react';
import './itineraire.css';

import qrcode from './images/qrcode.png'
import Parcours from './parcours';


class Itineraire extends  React.Component {
    constructor(props) {
      super(props);
      let itineraire=[];
      let listA=[];
      listA.push({hour:"13:58",name:"Gares",pmrImp:"false"});
      listA.push({hour:"14:10",name:"Hotel de ville",pmrImp:"false"});
      itineraire.push({list:listA,colorLine:"green",nameLine:"C2",commentIt:"Durée du trajet 4 arrêts",tMStop:true, tMText: "(2 arrêts)"});

      let listB=[];
      listB.push({hour:"14:19",name:"Hotel de ville",pmrImp:"false"});
      
      listB.push({hour:"14:23",name:"Arago",pmrImp:"true"});
      listB.push({hour:"14:56",name:"Maupertuis",pmrImp:"false"});

      itineraire.push({list:listB,colorLine:"orange", nameLine:"C1",commentIt:"Durée du trajet 13 arrêts",tMStop:true, tMText: "(11 arrêts)"})

      this.state = {
       
       itineraire:itineraire,
       
      };
      
      
    
    }
  
   
    render(){
        
        


        let lParcours=[];
        for(var i=0;i<this.state.itineraire.length;i++){
            let it=this.state.itineraire[i];
            console.log(it.commentIt);
            lParcours.push(<Parcours listArrets={it.list} colorLine={it.colorLine} nameLine={it.nameLine} commentIt={it.commentIt} tMStop={it.tMStop} tMText={it.tMText}/>)
        }
        
        let firstStop=this.state.itineraire[0].list[0];
        let lastStop=this.state.itineraire[this.state.itineraire.length-1].list[this.state.itineraire[this.state.itineraire.length-1].list.length-1];
       
        return(
        <div className="itineraire">
            <div className='itDep' >
                <div className='cible'>
                    <svg width="100%" height="100%" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8137 13.3636C17.6069 13.3636 14.1996 16.7809 14.1996 21C14.1996 25.2191 17.6069 28.6364 21.8137 28.6364C26.0205 28.6364 29.4278 25.2191 29.4278 21C29.4278 16.7809 26.0205 13.3636 21.8137 13.3636ZM38.8312 19.0909C37.9556 11.13 31.6549 4.81091 23.7172 3.93273V0H19.9102V3.93273C11.9725 4.81091 5.67187 11.13 4.79625 19.0909H0.875V22.9091H4.79625C5.67187 30.87 11.9725 37.1891 19.9102 38.0673V42H23.7172V38.0673C31.6549 37.1891 37.9556 30.87 38.8312 22.9091H42.7524V19.0909H38.8312V19.0909ZM21.8137 34.3636C14.4471 34.3636 8.48908 28.3882 8.48908 21C8.48908 13.6118 14.4471 7.63636 21.8137 7.63636C29.1803 7.63636 35.1384 13.6118 35.1384 21C35.1384 28.3882 29.1803 34.3636 21.8137 34.3636Z" fill="black"/>
                    </svg>
                </div>
                <div className='itDepText'>
                    {firstStop.name +" "+firstStop.hour}
                </div>
                
            </div>

            {lParcours}
            
            
            <div className='itDepArret' >

                <div className='bus' >
                    <svg width="100%" height="100%" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3092 0C6.86745 0 0.848633 6.1035 0.848633 13.65C0.848633 23.8875 14.3092 39 14.3092 39C14.3092 39 27.7698 23.8875 27.7698 13.65C27.7698 6.1035 21.751 0 14.3092 0ZM14.3092 18.525C11.6556 18.525 9.50188 16.341 9.50188 13.65C9.50188 10.959 11.6556 8.775 14.3092 8.775C16.9629 8.775 19.1166 10.959 19.1166 13.65C19.1166 16.341 16.9629 18.525 14.3092 18.525Z" fill="black"/>
                    </svg>
                </div>
               
                <div className='itDepArretText' >
                    {
                        lastStop.name+"  "+lastStop.hour
                    }
                       
                </div>

            </div>
            

        <div className='qrcodeIt'>
                <img src={qrcode} alt="qrcode" />
        </div>

           
        </div>
                      
                  
                  
              
        );
    }
  }
  export default Itineraire;