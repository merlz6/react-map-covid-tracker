
import React, { Component } from 'react';
import './App.css';
import USAMap from "react-usa-map";
import axios from 'axios';
import State from './State.js'
import Nation from './Nation.js'
class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    stateDeaths:'',
    state:'',
    hospitalizations:'',
    stateShow:{},
    stateNotes:{},
    nationalInfo:{}
  }
}
  componentDidMount(){
    this.nationalPull()

  }

    nationalPull = async()=> {
    await axios.get('https://api.covidtracking.com/v1/us/current.json')
    .then( data => this.setState({ nationalInfo: data.data[0]}))
    console.log('this is national death' , this.state.nationalInfo)
  }

  mapHandler = (event) => {
    let state = (event.target.dataset.name).toLowerCase()
    // individual state info axios
    axios.get('https://api.covidtracking.com/api/v1/states/' + `${state}` +'/current.json')
    .then(data => this.setState({
      stateDeaths:data.data.death,
      state:data.data.state,
      hospitalizedCurrently:data.data.hospitalizedCurrently,
      stateShow:data.data
    }) )
    console.log(this.state.stateShow)
    // notes axios
    axios.get('https://api.covidtracking.com/v1/states/' + `${state}` +'/info.json')
    .then(data => this.setState({stateNotes: data.data} ))
    // console.log(this.state.stateNotes)




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
      <Nation nationalInfo={this.state.nationalInfo}/>
      <h1>Covid Tracking Map </h1>
      <p><em>Click on any state to begin</em></p>
      <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
      <p>More information: <a href="http://github.com/gabidavila/react-usa-map">GitHub</a></p>
      {this.state.state !== '' ? <State info={this.state.stateShow} notes={this.state.stateNotes.notes}/> : ''}

    </div>
  );
}
}
export default App;
