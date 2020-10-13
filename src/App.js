
import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";
import axios from 'axios';
import State from './State.js'

class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    stateDeaths:'',
    state:'',
    hospitalizations:'',
    stateShow:{}
  }
}
  mapHandler = (event) => {
    let state = (event.target.dataset.name).toLowerCase()
    axios.get('https://api.covidtracking.com/api/v1/states/' + `${state}` +'/current.json')
    .then(data => this.setState({
      stateDeaths:data.data.death,
      state:data.data.state,
      hospitalizedCurrently:data.data.hospitalizedCurrently,
      stateShow:data.data
    }) )
    console.log(this.state.stateShow)
    if(this.state.state !== ''){
        alert(`${this.state.state} currently has ${this.state.stateDeaths} deaths and  ${this.state.hospitalizedCurrently} current hospitalizations`)
    }

    // alert(event.target.dataset.name);
  };
  statesFilling = () => {
  return {
    "NJ": {
      fill: "navy",
      clickHandler: () => alert("Custom callback for the NJ state")
    },
    "NY": {
      fill: "#CC0000"
    }
  };
};


  render() {
  return (
    <div className="App">
      <h1>Covid Tracking Map</h1>
      <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
      <p>More information: <a href="http://github.com/gabidavila/react-usa-map">GitHub</a></p>
      {this.state.state !== '' ? <State info={this.state.stateShow}/> : ''}

    </div>
  );
}
}
export default App;
