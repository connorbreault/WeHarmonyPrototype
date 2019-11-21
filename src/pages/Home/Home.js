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
    username: "SacDrummerINDIE",
    password: "1234",
    location: "Sacramento",
    instruments: "Drums",
    genres: "Indie",
    latitude: 38.5963157,
    longitude: -121.4399041,
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
    lastname: "Drummer",
    email: "placeholder@somewhere.com",
    username: "SacDrummerMETAL",
    password: "1234",
    location: "Sacramento",
    instruments: "Drums",
    genres: "Metal",
    latitude: 38.5963157,
    longitude: -121.4399041,
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
    firstname: "Reno",
    lastname: "Drummer",
    email: "placeholder@somewhere.com",
    username: "RenoDrummer",
    password: "1234",
    location: "Reno",
    instruments: "Drums",
    genres: "Metal",
    latitude: 39.6028659,
    longitude: -119.7773461,
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
    latitude: 38.5963157,
    longitude: -121.4399041,
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
    latitude: 38.5963157,
    longitude: -121.4399041,
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
    fauxAPIreturn: [],
    showDiv: false,
    noMatches: false,
    noMoreMatches: false,
    showResults: true
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
    // Show divs
    this.setState(({ showDiv: true, showResults: true }));

    // SEARCH LOGIC
    let matches = []
    for (var i = 0; i < this.state.fauxDB.length; i++) {
      if (this.state.fauxDB[i].instruments === this.state.selectedInstrument && this.state.fauxDB[i].genres === this.state.selectedGenre) {
        let latitudeDif = (Math.abs(this.state.fauxDB[i].latitude) - 38.5)
        let longitudeDif = (Math.abs(this.state.fauxDB[i].longitude) - 121.4)

        if (latitudeDif < 0.3 && longitudeDif < 0.3 && latitudeDif > -0.3 && longitudeDif > -0.3) {
          let match = this.state.fauxDB[i]
          console.log(`Match: ${match.username} === LatDif: ${latitudeDif} & LongDif: ${longitudeDif}`)
          matches.push(match)
          this.setState(({ fauxAPIreturn: matches }));
        }
      }
    }
    console.log(`API RETURN: ${this.state.fauxAPIreturn}`)


    // SET RESULTS
    if (fauxDB[this.state.currentResultIndex] === undefined) {
      this.setState(({ noMatches: true }));
    } else {
      this.setState(() => ({ currentResult: fauxDB[this.state.currentResultIndex] }));
      this.setState((prevState) => ({ currentResultIndex: prevState.currentResultIndex + 1 }))
    }
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
    if (fauxDB[this.state.currentResultIndex] === undefined) {
      this.setState(({ noMoreMatches: true }));
      this.setState(({ showResults: false }));
    } else {
      this.setState((prevState) => ({ currentResultIndex: prevState.currentResultIndex + 1 }))
      //console.log(this.state.currentResultIndex)
      //console.log(fauxDB[this.state.currentResultIndex])
      this.setState(() => ({ currentResult: fauxDB[this.state.currentResultIndex] }));
    }
  };

  handleNewSearch = event => {
    this.setState(({ showDiv: false }));
    this.setState(({ noMatches: false }));
    this.setState(({ noMoreMatches: false }));
    this.setState(({ currentResultIndex: 0 }));
  }


  // Render Page
  render() {
    return (
      <div className="homebackground" >

        <Navbar />

        <main>
          <div className="container">
            <h1 className="homelogo">Welcome</h1>

            {this.state.showDiv ? <div></div> :
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
            }

            {this.state.noMatches ?
              <div id="searchResultsContainer">
                <h3 id="resultsText">Results</h3>
                <div id="currentResult">
                  <h4>No users match your request 😥</h4>
                </div>
              </div>
              : null}

            {this.state.noMoreMatches ?
              <div id="searchResultsContainer">
                <h3 id="resultsText">Results</h3>
                <div id="currentResult">
                  <h4>There are no more users matching your request...</h4>
                </div>
                <button onClick={this.handleNewSearch} id="noMoreResultNewSearch" className="btn">New Search</button>
              </div>
              : null}

            {this.state.showDiv && this.state.showResults ?
              <div id="searchResultsContainer">
                <h3 id="resultsText">Results</h3>

                <div id="currentResult">

                  <div id="resultHeader">
                    <h4 className="resultUsername">{this.state.currentResult.username}</h4>
                    <img className="resultProfilePic" src={this.state.currentResult.profilePic} alt="" />
                    <h5 className="resultBio">{this.state.currentResult.bio}</h5>
                  </div>

                  <div>
                    <button onClick={this.handleViewProfile} id="viewCurrentResultProfile" className="btn">View Profile</button>
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
                  <button onClick={this.handleMessageSubmit} id="messageUser" className="btn">Message</button>
                  <button onClick={this.handleNextRequest} id="nextResult" className="btn">Next</button>
                </div>
              </div>
              : null}
            {this.state.showDiv && this.state.showResults ?
              <div>
                <button onClick={this.handleNewSearch} id="newSearch" className="btn">New Search</button>
              </div>
              : null}

          </div>
        </main>

        <Footer />

      </div>
    );
  }
}
export default Login;