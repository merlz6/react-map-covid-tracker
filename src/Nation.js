import React, { Component } from 'react';


class Nation extends Component {



  render() {
      console.log('props on Nation:' , this.props)
  return (
    <div className="nationalInfoHolder">
      <h1>U.S Nation Wide Totals</h1>
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
      <div className="individualNationInfoDivs">
      <h5>7 Day % change in Cases :</h5>
      <p>{this.props.avgCases7day * 100} %</p>
      </div>
      <div className="individualNationInfoDivs">
      <h5>7 day change in Deaths : </h5>
      <p>{this.props.avgDeaths7day * 100} %</p>
      </div>
      </div>
    </div>
  );
}
}
export default Nation;
