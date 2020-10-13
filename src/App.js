
import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    stateInfo:{}
  }
}
  mapHandler = (event) => {
    let state = (event.target.dataset.name).toLowerCase()
    axios.get('https://api.covidtracking.com/api/v1/states/' + `${state}` +'/current.json')
    .then(data => alert(`${state} currently has ${data.data.death} deaths and  ${data.data.hospitalizedCurrently} current hospitalizations`))
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
    </div>
  );
}
}
export default App;
