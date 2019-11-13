import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Signup.css";
import { Input } from "../../components/Form";
import InstrumentForm from "../../components/Form/instrument";
import GenreForm from "../../components/Form/genre";
import app from "../../base.js";

const Signup = ({ history }) => {
    const handleSignup = useCallback(async event => {
        event.preventDefault();
        const { firstname, lastname, email, username, password,
            location, instruments, genres } = event.target.elements;
        try {
            await app
                .auth()
                .createUser(firstname.value, lastname.value, email.value,
                    username.value, password.value, location.value, instruments.value, genres.value);
            history.push("/Home")
        } catch (error) {
            console.log(error);
        }
    }, [history]);

    const state = {
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
    };

    // setState when inputs recieve keystrokes
    const handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When form is submitted
    const handleFormSubmit = event => {
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
            });
    };

    // Render Page 
    return (
        <div className="signupbackground" >
            <div className="container">
                <h1 className="signuptext">Sign up</h1>
                <div className="signupbox">
                    <h5 id="yourinfo">YOUR INFO</h5>
                    <Input
                        value={state.firstname.value}
                        onChange={handleInputChange}
                        name="firstname"
                        placeholder="First name"
                    />
                    <Input
                        value={state.lastname.value}
                        onChange={handleInputChange}
                        name="lastname"
                        placeholder="Last name"
                    />
                    <Input
                        value={state.email.value}
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email"
                    />
                    <Input
                        value={state.username.value}
                        onChange={handleInputChange}
                        name="username"
                        placeholder="Username"
                    />
                    <Input
                        value={state.password.value}
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                    <h5 id="important">*IMPORTANT*</h5>
                    <Input
                        id="locationInput"
                        value={state.location.value}
                        onChange={handleInputChange}
                        name="location"
                        placeholder="Zip code"
                    />
                    <InstrumentForm
                        className="signupFormResize"
                        value={state.instruments.value}
                        onChange={handleInputChange}
                        name="instruments"
                    />
                    <GenreForm
                        id="signupFormResize"
                        value={state.genres.value}
                        onChange={handleInputChange}
                        name="genres"
                    />

                    {/* <Dropdown /> */}

                    <Link to="/Home"><button onClick={handleSignup, handleFormSubmit} className="btn" id="Signup">Sign up</button></Link>

                    {/* <FormBtn
                            onClick={this.handleFormSubmit} id="Login">
                            Login
                            </FormBtn> */}
                </div>
            </div>
            <br />
        </div>
    );
};

export default withRouter(Signup);