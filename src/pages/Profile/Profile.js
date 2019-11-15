import React, { Component, useCallback, useContext } from "react";
import { Redirect } from "react-router";
import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AuthContext, AuthProvider } from "../../Auth.js";


class Profile extends Component {
  handleAuth = event => {
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
      return <Redirect to="/Profile" />;
    }
  };
  //   const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/Home" />;
  // }

  // Render Page 
  render() {
    return (
      <AuthProvider>
        <div className="profilebackground" >
          <Navbar />
          <main>
            <div className="Picandname container">
              <div className="row"></div>
              <div className="col-6">
                <img className="Profilepic" alt="" src="../../images/placeholder.png"></img>
              </div>
              <div className="col-6">
                <p className="Profilename">(props.name)'s Profile</p>
              </div>
            </div>
          </main>
          <div>
            <Footer />
          </div>
        </div>
      </AuthProvider>
    );
  }
}
export default Profile;
