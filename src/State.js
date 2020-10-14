import React, { Component } from 'react';


class State extends Component {



  render() {
      console.log(this.props)
  return (
    <div>
    <h1>{this.props.info.state}'s State Totals Breakdown </h1>

    <div className="topBreakdown">
    <div className="infoHolder">
    <p className="infoLabels">Total Cases: </p><p>{this.props.info.positive}</p>
    </div>
    <div className="infoHolder">
    <p className="infoLabels">Total Deaths: </p><p>{this.props.info.death}</p>
    </div>
    <div className="infoHolder">
    <p className="infoLabels">Total Hospitalizations: </p><p>{this.props.info.hospitalized}</p>
    </div>
    </div>


    <h1>{this.props.info.state}'s State Daily Trends*  </h1>
    <div className="topBreakdown">
    <div className="infoHolder">
    <p className="infoLabels">New Positive Cases: </p><p>{this.props.info.positiveIncrease}</p>
    </div>
    <div className="infoHolder">
    <p className="infoLabels">New Deaths: </p><p>{this.props.info.deathIncrease}</p>
    </div>
    <div className="infoHolder">
    <p className="infoLabels">Total Hospitalizations: </p><p>{this.props.info.hospitalizedIncrease}</p>
    </div>

    </div>
  <span className="smallWriting">Numbers may be off due to information lag</span>


  <div className="notesHolder">
  <h4>Notes : </h4> <p>{this.props.notes} </p>
  </div>

    </div>
  );
}
}
export default State;
