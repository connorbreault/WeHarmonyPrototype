import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import M from 'materialize-css';

// import { Modal, Button } from 'react-materialize';
// const trigger = <Button>Open Modal</Button>;
// <Modal header="Modal Header" trigger={trigger}>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// </Modal>


class Container extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
  render() {
    // if (this.state.currentPage === "Login" || this.state.currentPage === "Signup") {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </div>
      </Router >
    );
  }
}
// }

export default Container;
