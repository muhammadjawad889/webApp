import React, { Component } from "react";
import SellerInfo from "./sellersinfo";

//Seller component to send data to seller info and display
class Seller extends Component {
  state = {
    sellers: [],
  };
  componentDidMount() {
    fetch("http://localhost:8888/api/seller")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ sellers: data });
      })
      .catch(console.log);
  }
  render() {
    return <SellerInfo sellers={this.state.sellers} />;
  }
}

export default Seller;
