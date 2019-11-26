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
    username: "SacDrummerALT",
    password: "1234",
    location: "Sacramento",
    instruments: "Drums",
    genres: "Alternative",
    latitude: 38.5963157,
    longitude: -121.4399041,
    profilePic: "https://www.metalsucks.net/wp-content/uploads/2011/04/blakerichardson.jpg",
    bio: "Blake Richardson",
    videos: [
      "GR8bITumSdk",
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
    profilePic: "https://pbs.twimg.com/profile_images/771114661785722880/ktrNr24O_400x400.jpg",
    bio: "Gabe Seeber",
    videos: [
      "l2Y8LJMuSmQ",
      "xTjCAKkA6So",
    ],
    id: 2
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
      "XPCGcpgpBVU",
    ],
    id: 3
  },
  {
    firstname: "Roseville",
    lastname: "Guitar",
    email: "placeholder@somewhere.com",
    username: "RosevilleGuitar",
    password: "1234",
    location: "Roseville",
    instruments: "Guitar",
    genres: "Metal",
    latitude: 38.7902545,
    longitude: -121.3770336,
    profilePic: "https://pbs.twimg.com/profile_images/1091122950919483397/Z5DS1rNd_400x400.jpg",
    bio: "Michael Caldwell",
    videos: [
      "FAcQmrV7CGI",
    ],
    id: 4
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
    profilePic: "https://i.ytimg.com/vi/vWCMZYTgyng/maxresdefault.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    videos: [
      "_YWR4n0VszI",
    ],
    id: 5
  },
  {
    firstname: "Sacramento",
    lastname: "Drummer",
    email: "placeholder@somewhere.com",
    username: "ElkGroveDrummer",
    password: "1234",
    location: "Elk Grove",
    instruments: "Drums",
    genres: "Metal",
    latitude: 38.4244019,
    longitude: -121.3312882,
    profilePic: "http://www.vratim.com/uploads/4/9/8/7/49871791/8303270_orig.jpg",
    bio: "Josh Miller",
    videos: [
      "IdNVcqpVM30",
    ],
    id: 6
  },
  {
    firstname: "Sacramento",
    lastname: "Drummer",
    email: "placeholder@somewhere.com",
    username: "AuburnDrummer",
    password: "1234",
    location: "Auburn",
    instruments: "Drums",
    genres: "Metal",
    latitude: 38.9101752,
    longitude: -121.067907,
    profilePic: "http://www.vratim.com/uploads/4/9/8/7/49871791/8303270_orig.jpg",
    bio: "Josh Miller but from auburn",
    videos: [
      "IdNVcqpVM30",
    ],
    id: 7
  },
  {
    firstname: "Fairfeild",
    lastname: "Drummer",
    email: "placeholder@somewhere.com",
    username: "AuburnDrummer",
    password: "1234",
    location: "Fairfeild",
    instruments: "Drums",
    genres: "Metal",
    latitude: 38.2493627,
    longitude: -122.0399969,
    profilePic: "http://www.vratim.com/uploads/4/9/8/7/49871791/8303270_orig.jpg",
    bio: "Josh Miller but from Fairfeild",
    videos: [
      "IdNVcqpVM30",
    ],
    id: 8
  },
  {
    firstname: "Connor",
    lastname: "Breault",
    email: "connor.breault@comcast.net",
    username: "Chaboi",
    password: "123456",
    location: "Roseville",
    instruments: "Guitar",
    genres: "Metal",
    latitude: 38.7902545,
    longitude: -121.3770336,
    profilePic: "./Chaboi.jpg",
    bio: "Heres my super cool bio",
    videos: [
      "fSG2bsXLzN0",
    ],
    id: 9
  },
]

class Home extends React.Component {

  state = {
    // Search Items
    selectedInstrument: "",
    selectedGenre: "",
    // Dummy database
    fauxDB,
    fauxAPIreturn: [],
    // Show + hide
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
    // FORM CHECK
    if (this.state.selectedGenre === "") {
      alert("Please select what genre you'd like to search")
    } if (this.state.selectedInstrument === "") {
      alert("Please select what instrument you'd like to search")
      // IF COMPLETE
    } else {
      // SHOW DIVS
      this.setState(({ showDiv: true, showResults: true }));
      // SEARCH LOGIC
      let matches = []
      // !!!! REPLACE fauxDB WITH OUR DB WHEN POSSIBLE !!!!
      for (var i = 0; i < this.state.fauxDB.length; i++) {
        // IF SELECTED INSTRUMENT AND GENRE
        if (this.state.fauxDB[i].instruments === this.state.selectedInstrument && this.state.fauxDB[i].genres === this.state.selectedGenre) {

          // !!!! SET THESE NUMBERS TO LOGGED IN USERS LATITUDE AND LONGITUDE WHEN POSSIBLE !!!!
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
        this.setState(({ noMatches: true, showResults: false }));
      } else {
        this.setState({ fauxAPIreturn: matches })
      }
    }
  };

  // NEXT REQUEST
  handleNextRequest = event => {
    // CHANGE OUT FAUXDB
    if (fauxDB[this.state.currentResultIndex] === undefined) {
      this.setState(({ noMoreMatches: true, showResults: false }));
    }
  };

  // NEW SEARCH
  handleNewSearch = event => {
    this.setState(({ showDiv: false, noMatches: false, currentResultIndex: 0, fauxAPIreturn: [], selectedInstrument: "", selectedGenre: "" }));
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