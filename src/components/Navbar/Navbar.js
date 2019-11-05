import React from 'react';
import M from 'materialize-css';
class Navbar extends React.Component {
    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }
    render() {
        return (
            <header>
                <nav className="nav-wrapper" >
                    <div className="container" id="mainNavbar">
                        <a href="/" className="brand-logo center">WeHarmony</a>
                        <a href="/" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul id="navbar-links" className="right hide-on-med-and-down">
                            <li><a href="/Home" className="homeLink lnk">Home</a></li>
                            <li><a href="/Profile" className="profileLink lnk">My Profile</a></li>
                            <li><a href="/Contact" className="contactLink lnk">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>

                <div>
                    <ul className="sidenav" id="mobile-links">
                        <li><a href="/Profile" className="profileLink">My Profile</a></li>
                        <li><a href="/Contact" className="contactLink">Contact Us</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Navbar