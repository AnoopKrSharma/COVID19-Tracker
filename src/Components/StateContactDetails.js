import React, { Component } from "react";
import Axios from "axios";

class StateContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryNumber: "",
      primaryTollFree: "",
      Email: "",
      RegionalNumber: "",
      state: this.props.StateName,
      load: false,
    };
  }

  componentDidMount() {
    Axios.get("https://api.rootnet.in/covid19-in/contacts").then((response) => {
      console.log(response);
      if (
        response != null &&
        response.data != null &&
        response.data.data != null
      ) {
        if (
          response.data.data.contacts != null &&
          response.data.data.contacts.primary != null
        ) {
          this.setState({
            primaryNumber: response.data.data.contacts.primary.number,
            primaryTollFree:
              response.data.data.contacts.primary["number-tollfree"],
            Email: response.data.data.contacts.primary.email,
          });
        }
        let regional = response.data.data.contacts.regional;
        let StateneedsToSearch = this.state.state;
        let filteredRegion = regional.filter(function (region) {
          return region.loc === StateneedsToSearch;
        });
        if (filteredRegion != null && filteredRegion.length > 0) {
          this.setState({
            RegionalNumber: filteredRegion[0].number,
            load: true,
          });
        } else {
          this.setState({
            load: true,
          });
        }
        console.log(this.state);
      }
    });
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
                      <th scope="col">
                        Primary Contact&nbsp;
                        <span class="badge badge-secondary">India</span>
                      </th>
                      <th scope="col">
                        Primary Contact (Toll Free)&nbsp;
                        <span class="badge badge-secondary">India</span>
                      </th>
                      <th scope="col">Email</th>
                      <th scope="col">Regional Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.load ? (
                      <tr>
                        <td>{this.state.primaryNumber}</td>
                        <td>{this.state.primaryTollFree}</td>
                        <td>{this.state.Email}</td>
                        <td>{this.state.RegionalNumber}</td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
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

export default StateContactDetails;
