import React, { Component } from "react";
import "./Home.css"
import { Input, FormBtn } from "../../components/Form";
// import { Link } from "react-router-dom";


class Login extends Component {
  state = {
    instrument: "",
    genre: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    alert(`Instrument: ${this.state.instrument} ---  Genre:${this.state.genre}`)
  };

  render() {
    return (
      <div className="homebackground" >
        <div className="container">
          <h1 className="logo">Welcome</h1>
          <div className="searchbox">
            <h2 className="searchtext">What kind of musician are you looking for?</h2>
            <Input
              value={this.state.instrument}
              onChange={this.handleInputChange}
              name="instrument"
              placeholder="instrument"
            />
            <Input
              value={this.state.genre}
              onChange={this.handleInputChange}
              name="genre"
              placeholder="genre"
            />
            <FormBtn
              onClick={this.handleFormSubmit} id="Search">
              Search
            </FormBtn>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;