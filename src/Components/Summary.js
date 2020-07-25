import React, { Component } from "react";

class Summary extends Component {
  render() {
    let confirmedCasesIndian=this.props.summaryData.confirmedCasesIndian==null?0:this.props.summaryData.confirmedCasesIndian;
    let discharged=this.props.summaryData.discharged==null?0:this.props.summaryData.discharged;
    let deaths=this.props.summaryData.deaths==null?0:this.props.summaryData.deaths;
    let activeCase=confirmedCasesIndian-(discharged+deaths);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>COVID-19 Stats (India)</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card border-primary mb-3">
              <div className="card-header bg-primary whiteFont">Total Cases</div>
              <div className="card-body text-primary">
                <h5 className="card-title">{confirmedCasesIndian}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-warning mb-3">
              <div className="card-header bg-warning whiteFont">Active Cases</div>
              <div className="card-body text-warning">
                <h5 className="card-title">{activeCase}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-success mb-3">
              <div className="card-header bg-success whiteFont">Recovered Cases</div>
              <div className="card-body text-success">
                <h5 className="card-title">{discharged}</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-danger mb-3">
              <div className="card-header bg-danger whiteFont">Death Cases</div>
              <div className="card-body text-danger">
                <h5 className="card-title">{deaths}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
