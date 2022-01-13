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
    this.stateAnswer=false;
    this.detectedPhrase="";
    this.departureInfo="";

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
    
    this.fadeoutEnd=this.fadeoutEnd.bind(this);
    
    this.handleChange=this.handleChange.bind(this);
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

handleChange(event){
  this.setState({textfield: event.target.value,loadResult:event.target.value});
}
fadeoutEnd(event){
  console.log("fin anim");
  event.target.style.display="none";
}



  render(){
    let displayInfo = "";
    let animationInfo="";
    let animationLaunch="";
    let transcript=false;
    let loadResult="0";
    let detectedPhrase="";
    let parcours="";
    let carto="";
    let reponse="";
    let questionsFAQ=[];

    console.log("dataFromServer");
    console.log(this.state.dataFromServer['action']);

    if(this.state.dataFromServer['action']==="start"){
        animationInfo="fadeout 500ms";
        animationLaunch=" slideup 1s forwards";
        this.departureInfo=this.state.dataFromServer['departure'];
        questionsFAQ=this.state.dataFromServer['faq'];
    }
    if(this.state.dataFromServer['action']==="call"){
      animationLaunch=""
        transcript=true
        
        

    }
    if(this.state.dataFromServer['action']==="phraseDetected"){
      loadResult="100";
      animationLaunch=""
        transcript=true
        displayInfo="none";
        this.stateAnswer=false;
        this.detectedPhrase=this.state.dataFromServer['phrase'];
      
    }
    if(this.state.dataFromServer['action']==="reset"){
      console.log("dans reset");
      this.detectedPhrase="";
      displayInfo="block";
    }
    
    if(this.state.dataFromServer['action']==="trajet"){
      console.log("trajet inside");
      parcours=this.state.dataFromServer['data'];
      console.log(parcours);
      transcript=true;
      displayInfo="none";
      reponse=this.state.dataFromServer['reponse'];
      this.stateAnswer=true;
    }     
   

      let heightReponse="60px";
      if(this.stateAnswer){
         heightReponse="650px";
         
         
      }
      detectedPhrase=this.detectedPhrase;
    
      if(this.state.dataFromServer['action']==="carto"){
        console.log("carto inside");
        carto=this.state.dataFromServer['data'];
        transcript=true;
        displayInfo="none";
        this.departureInfo=this.state.dataFromServer['departure'];
        reponse=this.state.dataFromServer['reponse'];
        this.stateAnswer=true;
      }

      if(this.state.dataFromServer['action']==="prix"){
        console.log("prix inside");
        
        reponse=this.state.dataFromServer['reponse'];
        transcript=true;
        displayInfo="none";
        this.stateAnswer=true;
      }

     let nextBus=[];
     if(this.state.dataFromServer['action']==="realtime"){
      let listNB=this.state.dataFromServer['data'];
      let nbMaxDisplay=3;
      for(let i=0;i<nbMaxDisplay;i++)
      {
        if(i<listNB.length()){
          let nb=listNB[i];
          nextBus.push(<NextBus dir={nb.direction} colorLine={nb.colorLine} lineName={nb.lineName} colorPert={nb.colorPert} pertText={nb.pertText} colorHO1="#102F54"  HO1={nb.HO1} colorHO2="#102F54" HO2={nb.HO2} HO1PERT="" HO2PERT="" dirPert={nb.dirPert}/>);
        }

      }

        
    }
     
    
    return (

     
      <div className="App">
          <TopBar arret="GARES" date={this.state.date} hour={this.state.hour} />
          
          {nextBus}



        
        {/*this.state.dataFromServer['action']*/}



        <div style={{display:displayInfo, animation:animationInfo}} onAnimationEnd={this.fadeoutEnd} >
          <InfoWidget  /> 
        </div>
        
        
        <div style={{position:"absolute",bottom:"0",width:"99%"}} >
          <div style={{display:displayInfo, animation:animationInfo}} onAnimationEnd={this.fadeoutEnd} >
          <AppuiBtn />
          </div>
          
          <div style={{position: "absolute",bottom: "-600px", display:"block",animation:animationLaunch}}>
            
            <Questions listFaqs={questionsFAQ} />
            
          </div>
         
        </div>
        {(transcript && !this.stateAnswer) && <Transcript  loading={loadResult+"%"} />}

       
        {(transcript ) &&  
        
          <div className="reponse"  style={{ height:heightReponse}}>
           
          <div className='detectedPhrase' style={{fontSize:this.stateAnswer ? "16px" : "25px"}}> {detectedPhrase}  </div>
          
          {this.stateAnswer && <Answer rep={reponse} parcours={parcours} carto={carto}  departure={this.departureInfo}/>}
          </div>
          }
           
        
       
            
         
           
         
         
         
      </div>
    );
  }
  
}

export default App;
