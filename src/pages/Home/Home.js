import React, { Component } from "react";
import "./Home.css"
<<<<<<< HEAD
import { Input, FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
=======
import { FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchInstrument from "../../components/Form/searchInstrument";
import SearchGenre from "../../components/Form/searchGenre";
>>>>>>> a5c51df116b24e7a49291ee3fc0d4a60ff4661f3
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
<<<<<<< HEAD
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
=======
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
>>>>>>> a5c51df116b24e7a49291ee3fc0d4a60ff4661f3
                />
                <FormBtn
                  onClick={this.handleFormSubmit} id="Search">
                  Search
            </FormBtn>
              </div>
            </div>
          </div>
        </main>
<<<<<<< HEAD
        <div>
          <Footer />
        </div>
=======
        <Footer />
>>>>>>> a5c51df116b24e7a49291ee3fc0d4a60ff4661f3
      </div>
    );
  }
}
export default Login;