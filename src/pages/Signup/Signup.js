import React from "react";
import "./Signup.css";
import { Input } from "../../components/Form";
// import InstrumentForm from "../../components/Form/instrument";
// import GenreForm from "../../components/Form/genre";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Select } from 'react-materialize';


class Signup extends React.Component {

    //     const handleSignup = useCallback(async event => {
    //         event.preventDefault();
    //         const { firstname, lastname, email, username, password,
    //             location, instruments, genres } = event.target.elements;
    //         try {
    //             await app
    //                 .auth()
    //                 .createUser(firstname.value, lastname.value, email.value,
    //                     username.value, password.value, location.value, instruments.value, genres.value);
    //             history.push("/Home")
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }, [history]);

    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        location: "",
        instruments: [],
        genres: [],
        latitude: "",
        longitude: "",
        showDiv: false
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
        if (this.state.firstname === "" || this.state.lastname === "" || this.state.email === "" || this.state.username === "" || this.state.password === "" || this.state.location === "" || this.state.instruments === "" || this.state.genres === "") {
            alert("Please fill out all inputs!")
        } else {
            // Geocode API 
            Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyBhef7w8QDnJeG0zyuIT_An9llVYqOXDv4`)
                .then(res => {
                    this.setState(({ showDiv: true }));

                    // Latitude/Longitude
                    const latitude = res.data.results[0].geometry.location.lat;
                    const longitude = res.data.results[0].geometry.location.lng;


                    console.log(`LATLONG:  ${latitude} ${longitude} `)
                    this.setState({ latitude, longitude })

                    // Alert results
                    //alert(`LAT=${latitude} LNG=${longitude} First name= ${this.state.firstname}, Last name= ${this.state.lastname}, email= ${this.state.email}, username= ${this.state.username}, password= ${this.state.password}, location= ${this.state.location}, instruments= ${this.state.instruments}, genres= ${this.state.genres}`)
                })

                // If err
                .catch(err => {
                    console.log(err);
                })
        }
    };

    handleReturnButton = event => {
        this.setState(({ showDiv: false }));
    }


    // Render Page 
    render() {
        return (
            <div className="signupbackground" >
                <div className="container">
                    {this.state.showDiv ? <div></div> :
                        <div>
                            <h1 className="signuptext">Sign up</h1>
                            <div className="signupbox">
                                <h5 id="yourinfo">YOUR INFO</h5>
                                <Input value={this.state.firstname} onChange={this.handleInputChange} name="firstname" placeholder="First name" />
                                <Input value={this.state.lastname} onChange={this.handleInputChange} name="lastname" placeholder="Last name" />
                                <Input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email" />
                                <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Username" />
                                <Input value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="Password" />
                                <h5 id="important">*IMPORTANT*</h5>
                                {/* ZIP CODE */}
                                <Input id="locationInput" value={this.state.location} onChange={this.handleInputChange} name="location" placeholder="Zip code" />
                                {/* INSTRUMENT INPUT */}
                                <Select name="instruments" defaultValue='' onChange={this.handleInputChange}>
                                    <option value="" disabled>
                                        My talent...
                                    </option>
                                    <option value="Guitar">
                                        Guitar
                            </option>
                                    <option value="Bass">
                                        Bass
                            </option>
                                    <option value="Drums">
                                        Drums
                            </option>
                                    <option value="Singer">
                                        Singer
                            </option>
                                    <option value="Piano">
                                        Piano
                            </option>
                                    <option value="Violin">
                                        Violin
                            </option>
                                    <option value="Flute">
                                        Flute
                            </option>
                                    <option value="Saxophone">
                                        Saxophone
                            </option>
                                </Select>

                                {/* GENRE INPUT */}
                                <Select name="genres" defaultValue='' onChange={this.handleInputChange}>
                                    <option value="" disabled>
                                        My style...
                            </option>
                                    <option value="Rock">
                                        Rock
                            </option>
                                    <option value="Blues">
                                        Blues
                            </option>
                                    <option value="Indie">
                                        Indie
                            </option>
                                    <option value="Metal">
                                        Metal
                            </option>
                                    <option value="Pop">
                                        Pop
                            </option>
                                    <option value="Rap">
                                        Rap
                            </option>
                                    <option value="Alternative">
                                        Alternative
                            </option>
                                </Select>

                                {/* <Dropdown /> */}

                                <button onClick={this.handleFormSubmit} className="btn" id="Signup">Sign up</button>
                            </div>
                        </div>
                    }
                    {this.state.showDiv ?
                        <div id="thanksSignup">
                            <h2>Thanks for signing up!</h2>
                            <button onClick={this.handleReturnButton} className="btn" id="returnToLogin">Return to login</button>
                        </div>
                        : null}

                </div>
            </div>
        );
    }
}

export default Signup;