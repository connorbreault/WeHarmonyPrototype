import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js"
import Home from "./pages/Home/Home.js";
import Signup from "./pages/Signup/Signup.js";
// import Profile from "./pages/Profile/Profile.js";
import Fauxfile from "./pages/Fauxfile/Fauxfile.js";
import Contact from "./pages/Contact/Contact.js";
import { AuthProvider } from "./Auth.js";
import PrivateRoute from "./PrivateRoute.js";
import dotenv from 'dotenv';

dotenv.config()

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <PrivateRoute exact path="/Home" component={Home} />
            <Route exact path="/Profile" component={Fauxfile} />
            {/* <Route exact path="/Profile" component={Profile} /> */}
            <Route exact path="/Contact" component={Contact} />
          </div>
        </Router>
      </AuthProvider>
    );
  }
};

export default App;
