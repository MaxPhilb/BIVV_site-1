import logo from './logo.svg';
import './App.css';
import TopBar from './topBar'
import React from 'react';
import NextBus from './nextBus';

class  App extends React.Component {



  constructor(props) {
    super();
    
    this.state={
      date:"",
      hour:""
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
    let h=ladate.getHours()>10 ? ladate.getHours() : "0"+ladate.getHours();
    let m=ladate.getMinutes()>10 ? ladate.getMinutes() : "0"+ladate.getMinutes();
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

  render(){
    return (
      <div className="App">
          <TopBar arret="GARE" date={this.state.date} hour={this.state.hour} />
          <NextBus />
      </div>
    );
  }
  
}

export default App;
