import React from "react";
import firebase from 'firebase';
import "./Signup.css";
import { Input } from "../../components/Form";
import InstrumentForm from "../../components/Form/instrument";
import GenreForm from "../../components/Form/genre";
import { Link } from "react-router-dom";
import Axios from "axios";



// firebase.auth().createUser(firstName, lastName, email, username, password, city).catch(function (error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

class Signup extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        location: "",
        instruments: [],
        genres: [],

        // Will be calculated by goog API
        latLong: "",
    }


    // setState when inputs recieve keystrokes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When form is submitted
    handleFormSubmit = event => {
        // Geocode API 
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=`)
            .then(res => {

                // Log whole response
                const whole = res
                console.log(whole)

                // Latitude/Longitude
                const latitude = res.data.results[0].geometry.location.lat;
                const longitude = res.data.results[0].geometry.location.lng;
                // this.setState({ latLong })

                // Alert results
                alert(`LAT=${latitude} LNG=${longitude} First name= ${this.state.firstname}, Last name= ${this.state.lastname}, email= ${this.state.email}, username= ${this.state.username}, password= ${this.state.password}, location= ${this.state.location}, instruments= ${this.state.instruments}, genres= ${this.state.genres}`)
            })

            // If err
            .catch(err => {
                console.log(err);
            })
    };


    // Render Page 
    render() {
        return (
            <div className="signupbackground" >
                <div className="container">
                    <h1 className="signuptext">Sign up</h1>
                    <div className="signupbox">
                        <h5 id="yourinfo">YOUR INFO</h5>
                        <Input
                            value={this.state.firstname}
                            onChange={this.handleInputChange}
                            name="firstname"
                            placeholder="First name"
                        />
                        <Input
                            value={this.state.lastname}
                            onChange={this.handleInputChange}
                            name="lastname"
                            placeholder="Last name"
                        />
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Email"
                        />
                        <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Username"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Password"
                        />
                        <h5 id="important">*IMPORTANT*</h5>
                        <Input
                            id="locationInput"
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            name="location"
                            placeholder="Zip code"
                        />
                        <InstrumentForm
                            className="signupFormResize"
                            value={this.state.instruments}
                            onChange={this.handleInputChange}
                            name="instruments"
                        />
                        <GenreForm
                            id="signupFormResize"
                            value={this.state.genres}
                            onChange={this.handleInputChange}
                            name="genres"
                        />

                        {/* <Dropdown /> */}

                        <Link to="/Home"><button onClick={this.handleFormSubmit} className="btn" id="Signup">Sign up</button></Link>

                        {/* <FormBtn
                        onClick={this.handleFormSubmit} id="Login">
                        Login
                        </FormBtn> */}

                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default Signup;