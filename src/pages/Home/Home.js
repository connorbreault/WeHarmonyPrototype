import React, { Component } from "react";
import { FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchInstrument from "../../components/Form/searchInstrument";
import SearchGenre from "../../components/Form/searchGenre";
import "./Home.css"

const fauxDB = [
  {
    firstname: "Sacramento",
    lastname: "Drummer",
    email: "placeholder@somewhere.com",
    username: "SacramentoDrummer",
    password: "1234",
    location: "Sacramento",
    instruments: "Drums",
    genres: "Metal",
    latitude: "38.5963157",
    longitude: "121.4399041",
    profilePic: "./PlaceholderProfilePic.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
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
    username: "SacramentoGuitar",
    password: "1234",
    location: "Sacramento",
    instruments: "Guitar",
    genres: "Metal",
    latitude: "38.5963157",
    longitude: "121.4399041",
    profilePic: "./PlaceholderProfilePic.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    videos: [
      "./vidPlaceholder.png",
    ],
    id: 2
  },
  {
    firstname: "Sacramento",
    lastname: "Bass",
    email: "placeholder@somewhere.com",
    username: "SacramentoBass",
    password: "1234",
    location: "Sacramento",
    instruments: "Bass",
    genres: "Metal",
    latitude: "38.5963157",
    longitude: "121.4399041",
    profilePic: "./images/PlaceholderProfilePic.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    videos: [
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
    fauxDB,
    fauxAPIreturn: []
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
    // SEARCH LOGIC
    for (var i = 0; i < this.state.fauxDB.length; i++) {
      console.log(`SEARCH: ${this.state.selectedInstrument}`)
      console.log(this.state.fauxDB[i].instruments)
      if (this.state.fauxDB[i].instruments === this.state.selectedInstrument) {
        let match = this.state.fauxDB[i]
        console.log(match)
        this.setState(() => ({ fauxAPIreturn: match }));
        console.log(`PUSHED TO API`)
      }
    }
    console.log(`API RETURN: ${this.state.fauxAPIreturn}`)


    // OR
    // this.setState(() => ({ fauxAPIreturn: fauxDB.filter(match => this.instruments === this.state.selectedInstrument) }));

    // SET RESULTS
    this.setState(() => ({ currentResult: fauxDB[this.state.currentResultIndex] }));
    this.setState((prevState) => ({ currentResultIndex: prevState.currentResultIndex + 1 }))
  };


  // VIEW PROFILE
  handleViewProfile = event => {
    alert("Logic to be added soon")
  }

  // MESSAGE BUTTON
  handleMessageSubmit = event => {
    alert(`Send message button hit`)
  };

  // NEXT REQUEST
  handleNextRequest = event => {
    this.setState((prevState) => ({ currentResultIndex: prevState.currentResultIndex + 1 }))
    //console.log(this.state.currentResultIndex)
    //console.log(fauxDB[this.state.currentResultIndex])
    this.setState(() => ({ currentResult: fauxDB[this.state.currentResultIndex] }));
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
              <h3 id="resultsText">Results</h3>

              <div id="currentResult">

                <div id="resultHeader">
                  <h4 className="resultUsername">{this.state.currentResult.username}</h4>
                  <img className="resultProfilePic" src={this.state.currentResult.profilePic} alt="" />
                  <h5 className="resultBio">{this.state.currentResult.bio}</h5>
                </div>

                <div>
                  <FormBtn
                    onClick={this.handleViewProfile} id="viewCurrentResultProfile">
                    View Profile
                </FormBtn>
                </div>

                <div className="resultVideos">
                  {
                    this.state.currentResult ?
                      (this.state.currentResult.videos.map((video, index) => (
                        <div key={index}><img src={video} alt="cool pics" className="video" /></div>
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
                  Next
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