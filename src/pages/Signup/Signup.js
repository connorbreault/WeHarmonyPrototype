import React from "react";
import "./Signup.css";
import { Input } from "../../components/Form";
import InstrumentForm from "../../components/Form/instrument";
import GenreForm from "../../components/Form/genre";
import { Link } from "react-router-dom";

class Signup extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        location: "",
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
        // event.preventDefault();
        // if (this.state.username && this.state.password) {
        //     console.log(`Name: ${this.state.username} --- Password: ${this.state.password}`)
        // } else {
        //     // event.preventDefault()
        //     // alert("Fill out the form please")
        // }
        alert(`First name= ${this.state.firstname}, Last name= ${this.state.lastname}, email= ${this.state.email}, username= ${this.state.username}, password= ${this.state.password}, location= ${this.state.location}, instruments= ${this.state.instruments}, genres= ${this.state.genres}`)
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
                            placeholder="Enter your first name"
                        />
                        <Input
                            value={this.state.lastname}
                            onChange={this.handleInputChange}
                            name="lastname"
                            placeholder="Enter your last name"
                        />
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Enter your email"
                        />
                        <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Choose a username"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Choose a password"
                        />
                        <h5>*IMPORTANT*</h5>
                        <Input
                            id="locationInput"
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            name="location"
                            placeholder="Your location by city"
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