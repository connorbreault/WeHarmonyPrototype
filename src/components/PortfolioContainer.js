import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Profile from "./pages/About";
import Blog from "./pages/Profile";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />
    }
    if (this.state.currentPage === "Profile") {
      return <Profile />
    }
    if (this.state.currentPage === "Contact") {
      return <Contact />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
