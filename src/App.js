import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js"
import Home from "./pages/Home/Home.js";
import Signup from "./pages/Signup/Signup.js";
import Profile from "./pages/Profile/Profile.js";
import Contact from "./pages/Contact/Contact.js"

// import Container from "./components/Container";

// function App() {
//   return <Container />;
// }

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
