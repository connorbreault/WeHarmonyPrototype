import React, { Component } from "react";
import "./Home.css"
import { Input, FormBtn } from "../../components/Form";
// import { Link } from "react-router-dom";

class Login extends Component {

  state = {
    Instruments: ["Singer", "Guitar", "Bass", "Drums", "Piano"],
    Genres: ["Rock", "Indie", "Metal", "Jazz", "Alternative"],
    selectedInstrument: "",
    selectedGenre: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    alert(`Instrument: ${this.state.selectedInstrument} ---  Genre:${this.state.selectedGenre}`)
  };

  render() {
    return (
      <div className="homebackground" >
        <div className="container">
          <h1 className="homelogo">Welcome</h1>
          <div className="searchbox">
            <div className="instructions">
              <h2 className="searchtext">What kind of musician are you looking for?</h2>
            </div>
            <div className="searchinputs">
              <Input
                value={this.state.selectedInstrument}
                onChange={this.handleInputChange}
                name="selectedInstrument"
                placeholder="Select instrument"
              />
              <Input
                value={this.state.selectedGenre}
                onChange={this.handleInputChange}
                name="selectedGenre"
                placeholder="Select genre"
              />
              <FormBtn
                onClick={this.handleFormSubmit} id="Search">
                Search
            </FormBtn>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default Login;