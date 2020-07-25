import React, { Component } from "react";
import Axios from "axios";

class StateBedDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: this.props.StateName,
      ruralHospitals: 0,
      ruralBeds: 0,
      urbanHospitals: 0,
      urbanBeds: 0,
      totalHospitals: 0,
      totalBeds: 0,
      asOn: null,
      load: false,
      NoRecordFound: true,
      sources: [],
    };
  }
  componentDidMount() {
    Axios.get("https://api.rootnet.in/covid19-in/hospitals/beds").then(
      (response) => {
        if (
          response != null &&
          response.data != null &&
          response.data.data != null &&
          response.data.data.regional != null
        ) {
          let regional = response.data.data.regional;
          let StateneedsToSearch = this.state.state;
          let filteredRegion = regional.filter(function (region) {
            return region.state === StateneedsToSearch;
          });
          console.log(filteredRegion);
          if (filteredRegion.length > 0) {
            this.setState({
              ruralHospitals: filteredRegion[0].ruralHospitals,
              ruralBeds: filteredRegion[0].ruralBeds,
              urbanHospitals: filteredRegion[0].urbanHospitals,
              urbanBeds: filteredRegion[0].urbanBeds,
              totalHospitals: filteredRegion[0].totalHospitals,
              totalBeds: filteredRegion[0].totalBeds,
              asOn: filteredRegion[0].asOn,
              load: true,
              NoRecordFound: false,
            });
          } else {
            this.setState({
              load: true,
              NoRecordFound: true,
            });
          }

          this.setState({
            sources: response.data.data.sources,
          });
        }
      }
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Rural Hospitals</th>
                      <th scope="col">Rural Beds</th>
                      <th scope="col">Urban Hospitals</th>
                      <th scope="col">Urban Beds</th>
                      <th scope="col">Total Hospitals</th>
                      <th scope="col">Total Beds</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.load ? (
                      this.state.NoRecordFound ? (
                        <tr>
                          <td colSpan="6" className="text-center">
                            Details not available
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td>{this.state.ruralHospitals}</td>
                          <td>{this.state.ruralBeds}</td>
                          <td>{this.state.urbanHospitals}</td>
                          <td>{this.state.urbanBeds}</td>
                          <td>{this.state.totalHospitals}</td>
                          <td>{this.state.totalBeds}</td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          <div className="text-center">
                            <div className="spinner-border" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-12">
              <b className="smallFont">Source:</b>
              {this.state.sources.map((source, index) => {
                return (
                  <p className="smallFont" key={index}>
                    {source.url}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StateBedDetails;
