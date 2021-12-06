import logo from './logo.svg';
import './App.css';
import TopBar from './topBar'
import React from 'react';

class  App extends React.Component {
  constructor(props) {
    super();
    var ladate=new Date();
    var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet","Aout","Septembre","Octobre","Novembre","Décembre");
    let jour=tab_jour[ladate.getDay()];
    let mois=tab_mois[ladate.getMonth()];
    //let dateJ="";
    let dateJ=jour+" "+ladate.getDate()+" "+mois+" "+ladate.getFullYear();
    this.state={
      date:dateJ
    };
  }

  render(){
    return (
      <div className="App">
          <TopBar arret="GARE" date={this.state.date} hour="15h30" />
      </div>
    );
  }
  
}

export default App;
