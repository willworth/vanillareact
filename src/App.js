import React, { Component} from "react";
import "./App.css";
import BunaGame from './BunaGame';





class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Vanilla React Project </h1>
        <BunaGame />        
      </div>
    );
  }
}

export default App;



