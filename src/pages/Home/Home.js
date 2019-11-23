import React from "react";
import { FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchInstrument from "../../components/Form/searchInstrument";
import SearchGenre from "../../components/Form/searchGenre";
import Results from "../../components/Results/results";
import Emoji from "../../components/Emoji";
import "./Home.css";

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
      "yV5WKvNZ_6g",
      "yV5WKvNZ_6g",
      "yV5WKvNZ_6g",
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
      "yV5WKvNZ_6g",
      "yV5WKvNZ_6g",
      "yV5WKvNZ_6g",
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
      "yV5WKvNZ_6g",
      "yV5WKvNZ_6g",
      "yV5WKvNZ_6g",
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
      "yV5WKvNZ_6g",
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
      "yV5WKvNZ_6g",
      "yV5WKvNZ_6g",
    ],
    id: 3
  },
]

class Home extends React.Component {


  state = {
    selectedInstrument: "",
    selectedGenre: "",
    fauxDB,
    fauxAPIreturn: [],
    showDiv: false,
    noMatches: false,
    noMoreMatches: false,
    showResults: true
  };



  // RECIEVE KEYSTROKES
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
      // IF SELECTED INSTRUMENT AND GENRE
      if (this.state.fauxDB[i].instruments === this.state.selectedInstrument && this.state.fauxDB[i].genres === this.state.selectedGenre) {
        let latitudeDif = (Math.abs(this.state.fauxDB[i].latitude) - 38.5)
        let longitudeDif = (Math.abs(this.state.fauxDB[i].longitude) - 121.4)
        // IF WITHIN LAT+LONG DISTANCE
        if (latitudeDif < 0.3 && longitudeDif < 0.3 && latitudeDif > -0.3 && longitudeDif > -0.3) {
          let match = this.state.fauxDB[i]
          matches.push(match)
        }
      }
    }
    // SET RESULTS OR NO MATCH
    if (matches.length <= 0) {
      this.setState(({ noMatches: true }));
      this.setState(({ showResults: false }));
    } else {
      this.setState({ fauxAPIreturn: matches }, () => console.log(`API: ${this.state.fauxAPIreturn[0].bio}`))
    }
  };

  // NEXT REQUEST
  handleNextRequest = event => {
    if (fauxDB[this.state.currentResultIndex] === undefined) {
      this.setState(({ noMoreMatches: true }));
      this.setState(({ showResults: false }));
    }
  };

  // NEW SEARCH
  handleNewSearch = event => {
    this.setState(({ showDiv: false }));
    this.setState(({ noMatches: false }));
    this.setState(({ noMoreMatches: false }));
    this.setState(({ currentResultIndex: 0 }));
    this.setState(({ fauxAPIreturn: [] }))
  }



  // Render Page
  render() {
    return (
      <div className="homebackground" >
        <Navbar />
        <main>
          <div className="container">
            <h1 className="homelogo">Welcome</h1>

            {/* SEARCH BOX */}
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


            {/* NO MATCHES */}
            {this.state.noMatches ?
              <div id="searchResultsContainer">
                <h3 id="resultsText">Results</h3>
                <div id="currentResult">
                  <h4>No users match your request <Emoji symbol="😥" /></h4>
                </div>
                <button onClick={this.handleNewSearch} id="noMoreResultNewSearch" className="btn">New Search</button>
              </div>
              : null}


            {/* RESULTS BOX */}
            {this.state.showDiv && this.state.showResults ?
              <Results items={this.state.fauxAPIreturn} />
              : null}


            {/* NEW SEARCH BUTTON */}
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
export default Home;