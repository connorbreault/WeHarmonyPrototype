import React from 'react';
import M from 'materialize-css';
import { SideNav, SideNavItem } from 'react-materialize';

class Navbar extends React.Component {
    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }
    render() {
        return (
            <header>
                <nav id="mainNavbar" className="nav-wrapper grey darken-2" >
                    <div className="container">
                        <a href="/" className="brand-logo center">WeHarmony</a>
                        {/* <a href="/" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </a> */}
                        <div className="hide-on-large-only">
                            <SideNav trigger={<i className="material-icons">menu</i>} options={{ closeOnClick: true }} icon="view_headline">
                                <SideNavItem userView user={{
                                    background: 'https://i.ytimg.com/vi/J3PxAxRTR78/maxresdefault.jpg',
                                    image: 'static/media/react-materialize-logo.824c6ea3.svg',
                                    name: 'Props.name',
                                }} />
                                <SideNavItem href="/Home" icon="home">
                                    Home
                                    </SideNavItem>
                                <SideNavItem href="/Profile" icon="contacts">
                                    My Profile
                                    </SideNavItem>
                                <SideNavItem href="/Contact" icon="email">
                                    Contact Us
                                    </SideNavItem>
                            </SideNav>
                        </div>
                        {/* </a> */}
                        <ul id="navbar-links" className="right hide-on-med-and-down">
                            <li><a href="/Home" className="homeLink lnk">Home</a></li>
                            <li><a href="/Profile" className="profileLink lnk">My Profile</a></li>
                        </ul>
                    </div>
                </nav>
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