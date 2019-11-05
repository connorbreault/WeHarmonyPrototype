import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

class Container extends Component {
  state = {
    currentPage: "Login"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Login") {
      return <Login />
    }
    if (this.state.currentPage === "Signup") {
      return <Signup />
    }
    if (this.state.currentPage === "Home") {
      return <Home />
    }
    if (this.state.currentPage === "Profile") {
      return <Profile />
    }
    if (this.state.currentPage === "Contact") {
      return <Contact />
    }
  }

  render() {
    // if (this.state.currentPage === "Login" || this.state.currentPage === "Signup") {
    return (
      <Router>
        <div>
          <Navbar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
// }

export default Container;
