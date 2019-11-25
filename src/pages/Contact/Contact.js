import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn, TextArea } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Emoji from "../../components/Emoji";
import "./Contact.css";

class Contact extends Component {
  state = {
    name: "",
    message: "",
    showInput: true,
    showThanks: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    if (this.state.name === "" || this.state.message === "") {
      alert("Please fill out all inputs!")
    } else {
      this.setState(({ showInput: false, showThanks: true }));
    }
  };

  render() {
    return (
      <div className="contactbackground" >
        <Navbar />
        <main>
          <h1 className="contactlogo">Contact Page</h1>
          {this.state.showInput ?
            <div>
              <div className="messageBox">
                <div className="contactus">
                  <h3 id="contactushead">Contact us!</h3>
                  <div className="messageform">
                    <Input
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      placeholder="Enter your name"
                    />
                    <TextArea
                      id="message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      name="message"
                      placeholder="Leave a message!"
                    />
                    <FormBtn
                      onClick={this.handleFormSubmit} id="Send">
                      Send
                </FormBtn>
                  </div>
                </div>
              </div>
              <div className="ourcontact">
                <h5>~ Or ~</h5>
                <hr />
                <h6>Ask your mom for our number</h6>
                <Emoji symbol="🤓" />
              </div>
            </div>
            : null
          }
          {this.state.showThanks ?
            <div id="thanksBox">
              <h2 id="thanksText">Thanks for your input!</h2>
              <Link to={`/`} ><button className="btn" id="returnHome">Return</button></Link>
            </div>
            : null}
        </main>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
