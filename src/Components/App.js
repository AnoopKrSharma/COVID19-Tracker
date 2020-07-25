import React, { Component } from "react";
import Menu from "./Menu";
import Summary from "./Summary";
import StateWiseData from "./StateWiseData";
import StateDataInDetail from "./StateDataInDetail";
import { Switch, Route } from "react-router-dom";
import "../CSS/App.css";
import Axios from "axios";

class App extends Component {
  state = {
    summary: {},
    regional: [],
    load:false
  };

  componentDidMount() {
    Axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
      (response) => {
        if (response != null && response.data != null) {
          this.setState({
            summary: response.data.data.summary,
            regional: response.data.data.regional,
            load:true
          });
        }
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <Summary summaryData={this.state.summary} />
        {/* <Router> */}
          <Switch>
            <Route exact path="/">
              <StateWiseData regionalData={this.state.regional} loadState={this.state.load}/>
            </Route>
            <Route exact path="/:id" children={<StateDataInDetail />} ></Route>
          </Switch>
        {/* </Router> */}
      </React.Fragment>
    );
  }
}

export default App;
