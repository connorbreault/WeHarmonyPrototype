import React, { Component } from "react";
import "./Home.css"
import { FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import SearchInstrument from "../../components/Form/searchInstrument";
// import SearchGenre from "../../components/Form/searchGenre";
import { Select } from 'react-materialize';

class Login extends Component {

  state = {
    selectedInstrument: "",
    selectedGenre: "",
  };



  // setState when inputs recieve keystrokes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When form is submitted
  handleFormSubmit = event => {
    alert(`Instrument: ${this.state.selectedInstrument} ---  Genre: ${this.state.selectedGenre}`)
  };


  // Render Page
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

                <Select name="selectedInstrument" defaultValue="" onChange={this.handleInputChange}>
                  <option value="" disabled>
                    Select desired musician
                    </option>
                  <option value="Guitar">
                    Guitar
                    </option>
                  <option value="Bass">
                    Bass
                    </option>
                  <option value="Drums">
                    Drums
                    </option>
                  <option value="Singer">
                    Singer
                    </option>
                  <option value="Piano">
                    Piano
                    </option>
                  <option value="Violin">
                    Violin
                    </option>
                  <option value="Flute">
                    Flute
                    </option>
                  <option value="Saxophone">
                    Saxophone
                    </option>
                </Select>

                <Select name="selectedGenre" defaultValue="" onChange={this.handleInputChange}>
                  <option value="">
                    Select your genre
                    </option>
                  <option value="Rock">
                    Rock
                    </option>
                  <option value="Blues">
                    Blues
                    </option>
                  <option value="Indie">
                    Indie
                    </option>
                  <option value="Metal">
                    Metal
                    </option>
                  <option value="Pop">
                    Pop
                    </option>
                  <option value="Rap">
                    Rap
                    </option>
                  <option value="Alternative">
                    Alternative
                    </option>
                </Select>


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