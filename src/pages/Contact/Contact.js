import React, { Component } from "react";
import "./Contact.css";
import { Input, FormBtn, TextArea } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Emoji from "../../components/Emoji";

class Contact extends Component {
  state = {
    name: "",
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    alert(`Name: ${this.state.name} ---  Message:${this.state.message}`)
  };
<<<<<<< HEAD
=======
  messageSent = () => {

  }
>>>>>>> a5c51df116b24e7a49291ee3fc0d4a60ff4661f3

  render() {
    return (
      <div className="contactbackground" >
        <Navbar />
        <main>
          <h1 className="contactlogo">Contact Page</h1>
<<<<<<< HEAD
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
=======
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
          <div className="thanksMessage">
            <h2>Thanks!</h2>
          </div>
>>>>>>> a5c51df116b24e7a49291ee3fc0d4a60ff4661f3
          <div className="ourcontact">
            <h5>~ Or ~</h5>
            <hr />
            <h6>Ask your mom for our number</h6>
            <Emoji symbol="🤓" />
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
