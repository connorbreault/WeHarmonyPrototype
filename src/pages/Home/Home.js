import React, { Component } from "react";
import "./Home.css"
import { FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchInstrument from "../../components/Form/searchInstrument";
import SearchGenre from "../../components/Form/searchGenre";
// import { Link } from "react-router-dom";

class Login extends Component {

  state = {
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
        <Navbar />
        <main>
          <div className="container">
            <h1 className="homelogo">Welcome</h1>
            <div className="searchbox">
              <div className="instructions">
                <h4 className="searchtext">What kind of musician are you looking for?</h4>
              </div>
              <div className="searchinputs">
                <SearchInstrument
                  value={this.state.selectedInstrument}
                  onChange={this.handleInputChange}
                  name="selectedInstrument"
                />
                <SearchGenre
                  value={this.state.selectedGenre}
                  onChange={this.handleInputChange}
                  name="selectedGenre"
                />
                <FormBtn
                  onClick={this.handleFormSubmit} id="Search">
                  Search
            </FormBtn>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Login;