import React from "react";
import "./Signup.css";
import { Input } from "../../components/Form";
import InstrumentForm from "../../components/Form/instrument";
import GenreForm from "../../components/Form/genre";
import { Link } from "react-router-dom";
import Axios from "axios";


// API CODE

// AIzaSyBhef7w8QDnJeG0zyuIT_An9llVYqOXDv4

class Signup extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        location: "",
        latLong: "",
        instruments: [],
        genres: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {

        // Geocode API 
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=`)
            .then(res => {
                const whole = res
                console.log(whole)
                const latitude = res.data.results[0].geometry.location.lat;
                const longitude = res.data.results[0].geometry.location.lng;
                alert(`LAT=${latitude} LNG=${longitude} First name= ${this.state.firstname}, Last name= ${this.state.lastname}, email= ${this.state.email}, username= ${this.state.username}, password= ${this.state.password}, location= ${this.state.location}, instruments= ${this.state.instruments}, genres= ${this.state.genres}`)
                // this.setState({ latLong })
            })
            .catch(err => {
                console.log(err);
            })

    };




    render() {
        return (
            <div className="signupbackground" >
                <div className="container">
                    <h1 className="signuptext">Sign up</h1>
                    <div className="signupbox">
                        <h5>YOUR INFO</h5>
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
                        <h5>*IMPORTANT*</h5>
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