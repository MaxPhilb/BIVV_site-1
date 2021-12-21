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



class  App extends React.Component {



  constructor(props) {
    super();
    let lquestions=[];
    lquestions.push("Le C1 est il déjà passé ?");
    lquestions.push("Le bus est-il accessible au fauteuil roulant ?");
    lquestions.push("Comment aller à l’arrêt Victor Hugo ?");
    lquestions.push("Comment aller à l’arrêt Ponsard ?");
    lquestions.push("Combien de temps dure mon trajet ?");
    lquestions.push("Est-ce que je suis en direction de ... ? ");
    lquestions.push("Quelles sont les horaires du musée ... ?");
    lquestions.push("Où est le restaurant le plus proche ?");

    this.ws = new WebSocket('ws://192.168.10.46:1880/ws')

    this.state={
      date:"",
      hour:"",
      questionsFAQ:lquestions,
      transitionToPushBtn:false,
      infoWidget:true,
      transistionTranscript:false,
      detectedPhrase:" Comment me rendre à Maupertuis ?",
      
      textfield:"",
      stateAnswer:false,
      dataFromServer:{action:""}
    };
    this.togglePTT=this.togglePTT.bind(this);
    this.fadeoutEnd=this.fadeoutEnd.bind(this);
    this.toggleTranscript=this.toggleTranscript.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.toggleAnswer=this.toggleAnswer.bind(this);
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
      
    })
  }
  
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setHour(),
      1000
    );

    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
      }
  
      this.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      this.setState({dataFromServer: message})
      console.log(message)
      }
        this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
  
      }
    

  }
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

    console.log("dataFromServer");
    console.log(this.state.dataFromServer['action']);

    if(this.state.dataFromServer['action']==="start"){
        animationInfo="fadeout 500ms";
        animationLaunch=" slideup 1s forwards";
    }
    if(this.state.dataFromServer['action']==="call"){
      animationLaunch=""
        transcript=true
    }
    if(this.state.dataFromServer['action']==="phraseDetected"){
      loadResult="100";
      animationLaunch=""
        transcript=true
        detectedPhrase=this.state.dataFromServer['phrase'];
      
    }
    if(this.state.dataFromServer['action']==="reset"){
      console.log("dans reset");
      displayInfo="block";
    }
    
    if((this.state.dataFromServer['action']==="trajet"){{
      
    }     
   

      let heightReponse="60px";
      if(this.state.stateAnswer){
         heightReponse="650px";
         
      }

      
    
    return (

     
      <div className="App">
          <TopBar arret="GARES" date={this.state.date} hour={this.state.hour} />
          <NextBus dir="Pré de l'eau" colorLine="#FDEA00" lineName="C2" colorPert="#61B045" pertText="TRAFIC NORMAL" colorHO1="green"  HO1="13 MIN" colorHO2="red" HO2="20 MIN" HO1PERT="AFFLUENCE FAIBLE" HO2PERT="AFFLUENCE FORTE" dirPert="Arret Vallier non desservi travaux en cours"/>
          <NextBus dir="TOTO" colorLine="blue" lineName="4" colorPert="red" pertText="TRAFIC PERTURBÉ" colorHO1="orange"  HO1="7 MIN" colorHO2="green" HO2="25 MIN" HO1PERT="AFFLUENCE MOYENNE" HO2PERT="AFFLUENCE FAIBLE"/>
          <NextBus dir="TOTO" colorLine="blue" lineName="4" colorPert="red" pertText="TRAFIC PERTURBÉ" colorHO1="#102F54"  HO1="7 MIN" colorHO2="green" HO2="25 MIN" HO1PERT="AFFLUENCE MOYENNE" HO2PERT="AFFLUENCE FAIBLE"/>
          



          <button className="display" onClick={this.togglePTT}>
          PTT (phase 1)
        </button>
        <button className="display" onClick={this.toggleTranscript}>
          Transcript (phase 2)
        </button>
        <input type="text" style={{width:"50px"}} value={this.state.textfield} onChange={this.handleChange}/>
        <button className="display" onClick={this.toggleAnswer}>
          Reponse (phase 3)
        </button>
        {this.state.dataFromServer['action']}



        <div style={{display:displayInfo, animation:animationInfo}} onAnimationEnd={this.fadeoutEnd} >
          <InfoWidget  /> 
        </div>
        
        
        <div style={{position:"absolute",bottom:"0",width:"99%"}} >
          <div style={{display:displayInfo, animation:animationInfo}} onAnimationEnd={this.fadeoutEnd} >
          <AppuiBtn />
          </div>
          
          <div style={{position: "absolute",bottom: "-600px", display:"block",animation:animationLaunch}}>
            
            <Questions listFaqs={this.state.questionsFAQ} />
            
          </div>
         
        </div>
        {(transcript && !this.state.stateAnswer) && <Transcript  loading={loadResult+"%"} />}

       
        {(transcript ) &&  
        
          <div className="reponse"  style={{ height:heightReponse}}>
           
          <div className='detectedPhrase' style={{fontSize:this.state.stateAnswer ? "16px" : "25px"}}> {detectedPhrase}  </div>
          
          {this.state.stateAnswer && <Answer />}
          </div>
          }
           
        
       
            
         
           
         
         
         
      </div>
    );
  }
  
}

export default App;
