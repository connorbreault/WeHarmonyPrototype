import React, { Component } from "react";
import "./Contact.css";
import { Input, FormBtn, TextArea } from "../../components/Form";

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
    alert(`Instrument: ${this.state.selectedInstrument} ---  Genre:${this.state.selectedGenre}`)
  };

  render() {
    return (
      <div className="contactbackground" >
        <h1 className="contactlogo">Contact Page</h1>
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
        <div className="ourcontact">
          <h5>~ Or ~</h5>
          <hr />
          <h6>Ask your mom for our number</h6>
          <span role="img" aria-label="nerd"><h6>🤓</h6></span>
        </div>
      </div>
    );
  }
}

export default Contact;
