import React, { Component } from "react";

// component to accept and reject appointment
class TimeSlot extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">sellers.name</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Time slot{" "}
              <span>
                <button onClick={this.edit}>edit</button>
              </span>
            </h6>

            <p className="card-text">Appointment</p>
            <p className="card-text">Accept /Reject</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TimeSlot;
