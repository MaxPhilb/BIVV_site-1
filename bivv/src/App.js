import logo from './logo.svg';
import './App.css';
import TopBar from './topBar'
import React from 'react';
import NextBus from './nextBus';
import InfoWidget from './info';
import AppuiBtn from './appuiBtn';
import Questions from './questions';

class  App extends React.Component {



  constructor(props) {
    super();
    let lquestions=[];
    lquestions.push("Le C1 est il déjà passé ?");
    lquestions.push("Le bus est-il accessible au fauteuil roulant ?");
    this.state={
      date:"",
      hour:"",
      questions:lquestions,
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
      hour:heureJ
    })
  }
  
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setHour(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
/*
 <InfoWidget />
<AppuiBtn />
 */

  render(){
    return (
      <div className="App">
          <TopBar arret="GARES" date={this.state.date} hour={this.state.hour} />
          <NextBus dir="Pré de l'eau" colorLine="#FDEA00" lineName="C2" colorPert="#61B045" pertText="TRAFIC NORMAL" colorHO1="green"  HO1="13 MIN" colorHO2="red" HO2="20 MIN" HO1PERT="AFFLUENCE FAIBLE" HO2PERT="AFFLUENCE FORTE" dirPert="Arret Vallier non desservi travaux en cours"/>
          <NextBus dir="TOTO" colorLine="blue" lineName="4" colorPert="red" pertText="TRAFIC PERTURBÉ" colorHO1="orange"  HO1="7 MIN" colorHO2="green" HO2="25 MIN" HO1PERT="AFFLUENCE MOYENNE" HO2PERT="AFFLUENCE FAIBLE"/>
          <NextBus dir="TOTO" colorLine="blue" lineName="4" colorPert="red" pertText="TRAFIC PERTURBÉ" colorHO1="orange"  HO1="7 MIN" colorHO2="green" HO2="25 MIN" HO1PERT="AFFLUENCE MOYENNE" HO2PERT="AFFLUENCE FAIBLE"/>
          
         
          <Questions listFaqs={this.state.questions} />
      </div>
    );
  }
  
}

export default App;
