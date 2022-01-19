import './App.css';
import { slideInUp } from 'react-animations'
import TopBar from './topBar'
import React from 'react';
import NextBus from './nextBus';
import InfoWidget from './info';
import AppuiBtn from './appuiBtn';
import Questions from './questions';
import Transcript from './transcript';
import styled, { keyframes } from "styled-components";
import Answer from './answer';



const AnimIn = keyframes`${slideInUp}`;

//const IP="192.168.10.46";
const IP="127.0.0.1";

class  App extends React.Component {



  constructor(props) {
    super();
   
    this.timeout = 250; // Initial timeout duration as a class variable
    
    this.detectedPhrase="";

    this.page=0;
    this.trafic={state:false};
    this.answer={};
    this.state={
      date:"",
      hour:"",
     
      transitionToPushBtn:false,
      infoWidget:true,
      transistionTranscript:false,
      detectedPhrase:" Comment me rendre à Maupertuis ?",
      
      textfield:"",
      
      dataFromServer:{action:""}
    };
    
     
  }

 

  setHour(){
    let ladate=new Date();
    let tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    let tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet","Aout","Septembre","Octobre","Novembre","Décembre");
    let jour=tab_jour[ladate.getDay()];
    let mois=tab_mois[ladate.getMonth()];
    //let dateJ="";
    let dateJ=jour+" "+ladate.getDate()+" "+mois+" "+ladate.getFullYear();
    let h=ladate.getHours()>=10 ? ladate.getHours() : "0"+ladate.getHours();
    let m=ladate.getMinutes()>=10 ? ladate.getMinutes() : "0"+ladate.getMinutes();
    //let heureJ=ladate.getHours()+':'+;
    let heureJ=h+":"+m;

    this.setState({
      date:dateJ,
      hour:heureJ,
      ws:null
      
    })
  }
  
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setHour(),
      1000
    );
      this.connectWS();
    }
    
    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
    connectWS = () => {
        var ws = new WebSocket("ws://"+IP+":1880/ws");
        let that = this; // cache the this
        var connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");

            this.setState({ ws: ws });

            that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };

   
  
      ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      that.setState({dataFromServer: message})
      console.log(message)
      }
    }
    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
     check = () => {
      const { ws } = this.state;
      if (!ws || ws.readyState == WebSocket.CLOSED) this.connectWS(); //check if websocket instance is closed, if so call `connect` function.
  };

      
      
    
    

  
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
/*
 <InfoWidget />
<AppuiBtn />
<Transcript phrase="Quel bus ?"/>
 */





  render(){
    
    let animationLaunch="";
   
    let loadResult="0";
    let detectedPhrase="";

    console.log("dataFromServer");
    console.log(this.state.dataFromServer['action']);

    if(this.state.dataFromServer['action']==="reset"){
      this.page=0;
    }

    if(this.state.dataFromServer['action']==="start"){
        this.page=1;
        this.questionsFAQ=this.state.dataFromServer['faq'];
    }
    if(this.state.dataFromServer['action']==="call"){
      this.page=2;
        
        

    }
    if(this.state.dataFromServer['action']==="phraseDetected"){
        this.detectedPhrase=this.state.dataFromServer['phrase'];
        this.page=3;
    }
    
    
    if(this.state.dataFromServer['action']==="trajet"){
      this.page=4;
      console.log("trajet inside");
      this.answer={};
      this.answer.parcours=this.state.dataFromServer['data'];
      console.log(this.answer.parcours);
      this.answer.response=this.state.dataFromServer['reponse'];
      this.answer.carto="";

    }     
   

     

      detectedPhrase=this.detectedPhrase;
    
      if(this.state.dataFromServer['action']==="carto"){
        console.log("carto inside");
        this.answer={};
        this.answer.carto=this.state.dataFromServer['data'];
        this.answer.departureInfo=this.state.dataFromServer['departure'];
        this.answer.response=this.state.dataFromServer['reponse'];
        this.page=4;
      }

      if(this.state.dataFromServer['action']==="prix"){
        console.log("prix inside");
        this.answer={};
        this.answer.response=this.state.dataFromServer['reponse'];
        this.page=4;

      }

     
     
     let nbMaxDisplay=8;
     
     if(this.state.dataFromServer['action']==="realtime"){
      let listNB=this.state.dataFromServer['data'];
      //console.log(listNB);
      let infotrafic=this.state.dataFromServer['infoTrafic'];
      let nextBus=[];
      let descTrafic=[];
      console.log(infotrafic);
      if(infotrafic.state){
        nbMaxDisplay=3;
      }

      this.trafic.state=infotrafic.state;

      if(infotrafic.listPert.length>0){
        let tabDesc=infotrafic.listPert[0].description.split('\r\n');
        tabDesc.forEach(function(desc){
          descTrafic.push(desc);
          descTrafic.push(<br />);
        })
      }
      this.trafic.descTrafic=descTrafic;


      for(let i=0;i<nbMaxDisplay;i++)
      {
        if(i<listNB.length){
          let nb=listNB[i];
          nextBus.push(<NextBus dir={nb.direction} colorLine={nb.colorLine} lineName={nb.lineName} colorPert={nb.colorPert} pertText={nb.pertText} colorHO1="#102F54"  HO1={nb.HO1} colorHO2="#102F54" HO2={nb.HO2} HO1PERT="" HO2PERT="" dirPert={nb.dirPert}/>);
        }

      }
      this.trafic.nextBus=nextBus;
      this.trafic.title=infotrafic.listPert[0].titre.toUpperCase();
    }

      if(this.page==0){
        
        this.detectedPhrase="";
       
      }
      if(this.page==1){
        
        animationLaunch=" slideup 1s forwards";
      }
      if(this.page==2){
        animationLaunch="";
        
      }
      if(this.page==3){
        loadResult="100";
        animationLaunch=""
        
      }

      let heightReponse="60px";
      if(this.page===4){
           heightReponse="650px";
        
      }
    
     
    
    return (

     
      <div className="App">
          <TopBar arret="GARES" date={this.state.date} hour={this.state.hour} />
          
          {this.trafic.nextBus}



        
        {/*this.state.dataFromServer['action']*/}


        {(this.trafic.state && this.page==0) &&
          <div >
            <InfoWidget titre={this.trafic.title}  description={this.trafic.descTrafic} /> 
          </div>
        }
        
        
        
        <div style={{position:"absolute",bottom:"0",width:"99%"}} >

          {(this.trafic.state && this.page==0) &&
            <div   >
            <AppuiBtn />
            </div>
          }
          
          {(this.page==1) &&
            <div style={{position: "absolute",bottom: "-600px", display:"block",animation:animationLaunch}}>
              
              <Questions listFaqs={this.questionsFAQ} />
              
            </div>
          }
         
        </div>
        {((this.page===2 || this.page===3) && this.page!==4) && <Transcript  loading={loadResult+"%"} />}

       
        {(this.page>=2 ) &&  
        
          <div className="reponse"  style={{ height:heightReponse}}>
           
          <div className='detectedPhrase' style={{fontSize:(this.page===4) ? "16px" : "25px"}}> {detectedPhrase}  </div>
          
          {(this.page===4) && <Answer rep={this.answer.response} parcours={this.answer.parcours} carto={this.answer.carto}  departure={this.answer.departureInfo}/>}
          </div>
          }
           
        
       
            
         
           
         
         
         
      </div>
    );
  }
  
}

export default App;
