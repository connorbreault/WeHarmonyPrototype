import React from "react";
import "./Signup.css";
import { Input } from "../../components/Form";
import InstrumentForm from "../../components/Form/instrument";
import GenreForm from "../../components/Form/genre";
import { Link } from "react-router-dom";

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        email: "",
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
        if (this.state.username && this.state.password) {
            console.log(`Name: ${this.state.username} --- Password: ${this.state.password}`)
        } else {
            // event.preventDefault()
            // alert("Fill out the form please")
        }
    };


    render() {
        return (
            <div className="signupbackground" >
                <div className="container">
                    <h1 className="signuptext">Sign up</h1>
                    <div className="signupbox">
                        <Input
                            value={this.state.firstname}
                            onChange={this.handleInputChange}
                            name="firstname"
                            placeholder="Enter your first name"
                        />
                        <Input
                            value={this.state.firstname}
                            onChange={this.handleInputChange}
                            name="lastname"
                            placeholder="Enter your last name"
                        />
                        <Input
                            value={this.state.firstname}
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
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="confirmpassword"
                            placeholder="Confirm password"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="location"
                            placeholder="Your location by city"
                        />
                        <InstrumentForm
                            onChange={this.handleInputChange}
                            name="instruments"
                        />
                        <GenreForm
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
            </div>
        );
    }
}

export default Signup;