import React from "react";
import CheckInfo from "./checkinfo";
import CreateSeller from "./createSeller";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Request from "./request";

//functional component to display sellers
const SellerInfo = ({ sellers }) => {
  return (
    <div>
      <center>
        <h1>Sellers List</h1>
      </center>

      {sellers.map((seller) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" key={seller.name}>
              {seller.name.toUpperCase()}
            </h5>

            {seller.meetingSlot.map((mSlots) => (
              <div>
                <span className="card-text" key={sellers.day}>
                  <b> {mSlots.day.toUpperCase()}</b>
                </span>
                <span> Start time: {mSlots.startTime}</span>
                <span> To </span>
                <span> End time: {mSlots.endTime}</span>
                <p>
                  <CheckInfo checkinfo={mSlots.available} />
                </p>
                <p>
                  <Request request={mSlots} />
                </p>
              </div>
            ))}
            <Router>
              <Link className="btn btn-primary btn-sm" to="./createSeller">
                Add appointment Slot{" "}
              </Link>
              <Switch>
                <Route
                  exact
                  path="/createSeller"
                  render={(props) => (
                    <CreateSeller {...props} name={seller.name} check={true} />
                  )}
                />
              </Switch>
            </Router>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellerInfo;
