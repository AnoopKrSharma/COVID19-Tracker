import React from "react";
import { useParams } from "react-router";
import StateBedDetails from "./StateBedDetails";
import StateContactDetails from './StateContactDetails';
import { Link } from "react-router-dom";

function StateDataInDetail() {
  let { id } = useParams();

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5>
              <Link to="/">
                <img src={require("../Assets/back.png")} alt="Back Button" title="Go back to Home Page"/>
              </Link>
              &nbsp;Important Contact and Information for <b>{id}</b> Region
            </h5>
          </div>
        </div>
      </div>
      <StateContactDetails StateName={id} />
      <StateBedDetails StateName={id} />
    </React.Fragment>
  );
}

export default StateDataInDetail;
