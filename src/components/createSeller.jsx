import React, { Component } from "react";
import SellerInfo from "./sellersinfo";

// create new seller
class CreateSeller extends Component {
  state = {
    sellers: [],
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    let sellComp = <SellerInfo />;
    let meetingSolt = [];
    let name = this.props.name;
    e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    meetingSolt.push(formData);

    const data = { name: name, meetingSlot: meetingSolt };
    fetch("http://localhost:8888/api/appointmentSlot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Add slot for {this.props.name}</h3>
          <form onSubmit={this.handleSubmit}>
            <input ref="day" type="text" placeholder="Day" name="day" />
            <input
              ref="startTime"
              type="text"
              placeholder="Start Time"
              name="startTime"
            />
            <input
              ref="endTime"
              type="text"
              placeholder="End Time"
              name="endTime"
            />
            <input
              style={{ display: "none" }}
              ref="available"
              type="text"
              placeholder="Availabe"
              name="available"
              value="false"
            />
            <input
              style={{ display: "none" }}
              ref="request"
              type="text"
              placeholder="request"
              name="request"
              value="false"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <p>
          <b>
            {this.props.check ? (
              ""
            ) : (
              <SellerInfo sellers={this.state.sellers} />
            )}
          </b>
        </p>
        {/* <SellerInfo sellers={this.state.sellers} /> */}
      </React.Fragment>
    );
  }
}

export default CreateSeller;
