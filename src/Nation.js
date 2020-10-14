import React, { Component } from 'react';


class Nation extends Component {



  render() {
      console.log('props on Nation:' , this.props.nationalInfo)
  return (
    <div className="nationalInfoHolder">
      <h1>Nation Wide Totals</h1>
      <div className="nationalDivHolders">
      <div className="individualNationInfoDivs">
      <h5>Total Cases : </h5>
      <p>{this.props.nationalInfo.positive}</p>
      </div>
      <div className="individualNationInfoDivs">
      <h5>Total Deaths : </h5>
      <p>{this.props.nationalInfo.death}</p>
      </div>
      <div className="individualNationInfoDivs">
      <h5> Deaths last 24hrs : </h5>
      <p>{this.props.nationalInfo.deathIncrease}</p>
      </div>
      <div className="individualNationInfoDivs">
      <h5>Cases in the last 24hrs : </h5>
      <p>{this.props.nationalInfo.positiveIncrease}</p>
      </div>
      </div>
    </div>
  );
}
}
export default Nation;
