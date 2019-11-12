import React from 'react';
import M from 'materialize-css';
import { SideNav, SideNavItem } from 'react-materialize';
import pic from "../../images/Ad.jpg"

class Navbar extends React.Component {

    // Initialize sidebar
    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }


    // Render navbar
    render() {
        return (
            <header>
                <nav id="mainNavbar" className="nav-wrapper grey darken-2" >
                    <div className="container">

                        {/* Header logo */}
                        <a href="/Home" className="brand-logo center">WeHarmony</a>

                        {/* SIDENAV */}
                        <div className="hide-on-large-only">
                            <SideNav trigger={<i className="material-icons">menu</i>} options={{ closeOnClick: true }} icon="view_headline">

                                {/* Sidenav Head */}
                                <SideNavItem userView user={{
                                    background: pic,
                                    image: 'static/media/react-materialize-logo.824c6ea3.svg',
                                    name: 'Loading...',
                                    id: "test"
                                }} />

                                {/* Sidenav links */}
                                <SideNavItem href="/Home" icon="home">
                                    Home
                                    </SideNavItem>
                                <SideNavItem href="/Profile" icon="contacts">
                                    My Profile
                                    </SideNavItem>
                                <SideNavItem href="/Contact" icon="email">
                                    Contact Us
                                    </SideNavItem>

                                {/* Bottom ad (OPTIONAL) */}
                                {/* <img id="sidenavBottomAd" style={{ width: "300px", height: "150px" }} src="https://i.ytimg.com/vi/J3PxAxRTR78/maxresdefault.jpg" alt=""></img> */}

                            </SideNav>
                        </div>

                        {/* Navbar links */}
                        <ul id="navbar-links" className="right hide-on-med-and-down">
                            <li><a href="/Home" className="homeLink lnk">Home</a></li>
                            <li><a href="/Profile" className="profileLink lnk">My Profile</a></li>
                        </ul>
                    </div>
                </nav>

                {/* Sidenav links */}
                <div>
                    <ul className="sidenav" id="mobile-links">
                        <li><a href="/profile" className="profileLink">My Profile</a></li>
                        <li><a href="/contact" className="contactLink">Contact Us</a></li>
                    </ul>
                </div>
            </header >
        )
    }
}
export default Navbar