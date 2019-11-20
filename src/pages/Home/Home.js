import React, { Component } from "react";
import "./Home.css"
import { FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import SearchInstrument from "../../components/Form/searchInstrument";
import SearchGenre from "../../components/Form/searchGenre";


const fauxDB = [
  {
    firstname: "Sacramento",
    lastname: "Drummer",
    email: "placeholder@somewhere.com",
    username: "SacramentoDrummerMetal",
    password: "1234",
    location: "Sacramento",
    instruments: "Drummer",
    genres: "Metal",
    latitude: "38.5963157",
    longitude: "121.4399041",
    profilePic: "../../../../images/PlaceholderProfilePic.jpg",
    bio: "I drum",
    videos: [
      "./vidPlaceholder.png",
      "./vidPlaceholder.png",
      "./vidPlaceholder.png",
    ],
    id: 1
  },
  {
    firstname: "Sacramento",
    lastname: "Guitar",
    email: "placeholder@somewhere.com",
    username: "SacramentoGuitarMetal",
    password: "1234",
    location: "Sacramento",
    instruments: "Guitar",
    genres: "Metal",
    latitude: "38.5963157",
    longitude: "121.4399041",
    profilePic: "../../../../images/PlaceholderProfilePic.jpg",
    bio: "I shred",
    videos: [
      "./vidPlaceholder.png",
      "./vidPlaceholder.png",
      "./vidPlaceholder.png",
    ],
    id: 2
  },
  {
    firstname: "Sacramento",
    lastname: "Bass",
    email: "placeholder@somewhere.com",
    username: "SacramentoBassMetal",
    password: "1234",
    location: "Sacramento",
    instruments: "Bass",
    genres: "Metal",
    latitude: "38.5963157",
    longitude: "121.4399041",
    profilePic: "../../../../images/PlaceholderProfilePic.jpg",
    bio: "I shred",
    videos: [
      "./vidPlaceholder.png",
      "./vidPlaceholder.png",
      "./vidPlaceholder.png",
    ],
    id: 3
  },
]

class Login extends Component {

  state = {
    selectedInstrument: "",
    selectedGenre: "",

    currentResult: "",
    currentResultIndex: 0,
    fauxDB
  };



  // setState when inputs recieve keystrokes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // INITIAL SEARCH
  handleFormSubmit = event => {

    this.setState(() => ({ currentResult: fauxDB[this.state.currentResultIndex] }));
    this.setState((prevState) => ({ currentResultIndex: prevState.currentResultIndex + 1 }))
    alert(`currentRes: ${this.state.currentResult} Instrument: ${this.state.selectedInstrument} ---  Genre: ${this.state.selectedGenre}`)

  };

  // MESSAGE BUTTON
  handleMessageSubmit = event => {
    alert(`Send message button hit`)
  };

  // NEXT REQUEST
  handleNextRequest = event => {
    this.setState((prevState) => ({ currentResultIndex: prevState.currentResultIndex + 1 }))
    console.log(this.state.currentResultIndex)
    console.log(fauxDB[this.state.currentResultIndex])
    this.setState(() => ({ currentResult: fauxDB[this.state.currentResultIndex] }));
    alert(`NEXT!`)
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

                <SearchInstrument name="selectedInstrument" defaultValue="" onChange={this.handleInputChange} />
                <SearchGenre name="selectedGenre" defaultValue="" onChange={this.handleInputChange} />

                <FormBtn onClick={this.handleFormSubmit} id="Search">Search</FormBtn>

              </div>
            </div>

            <div id="searchResultsContainer">
              <h3>Results</h3>

              <div id="currentResult">
                <img className="resultProfilePic" src={this.state.currentResult.profilePic} alt="" />
                <h4 className="resultUsername">{this.state.currentResult.username}</h4>
                <h5 className="resultBio">{this.state.currentResult.bio}</h5>
                <div className="resultVideos">
                  {
                    this.state.currentResult ?
                      (this.state.currentResult.videos.map((video, index) => (
                        <div key={index}><img src={video} alt="cool pics" /></div>
                      ))) :
                      (<div></div>)
                  }
                </div>
              </div>

              <div id="responseButtons">
                <FormBtn
                  onClick={this.handleMessageSubmit} id="messageUser">
                  Message
                </FormBtn>
                <FormBtn
                  onClick={this.handleNextRequest} id="nextResult">
                  Next Result
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