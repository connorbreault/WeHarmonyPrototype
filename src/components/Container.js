import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import M from 'materialize-css';

class Container extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
  render() {
    // if (this.state.currentPage === "Login" || this.state.currentPage === "Signup") {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router >
    );
  }
}
// }

export default Container;
