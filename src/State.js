import React, { Component } from 'react';


class State extends Component {



  render() {
      console.log(this.props)
  return (
    <div>
    <h1>{this.props.info.state}'s State Breakdown </h1>
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
    </div>
  );
}
}
export default State;
