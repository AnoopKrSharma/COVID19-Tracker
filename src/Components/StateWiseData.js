import React, { Component } from "react";
import { Link } from "react-router-dom";

class StateWiseData extends Component {
  render() {
    let regionalData =
      this.props.regionalData === undefined ? [] : this.props.regionalData;
    let loadState =
      this.props.loadState === undefined ? false : this.props.loadState;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Region</th>
                      <th scope="col">Total Case</th>
                      <th scope="col">Active Case</th>
                      <th scope="col">Discharged Case</th>
                      <th scope="col">Death Case</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadState ? (
                      regionalData.map((region, index) => {
                        return (
                          <tr key={index + 1}>
                            <th scope="col">{index + 1}</th>
                            <td>{region.loc}</td>
                            <td>{region.confirmedCasesIndian}</td>
                            <td>
                              {region.confirmedCasesIndian -
                                (region.discharged + region.deaths)}
                            </td>
                            <td>{region.discharged}</td>
                            <td>{region.deaths}</td>
                            <td>
                              <Link to={"/" + region.loc}>
                                <img
                                  src={require("../Assets/Search.png")}
                                  alt="View More Details"
                                  title="View more details"
                                />
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StateWiseData;
