import React from 'react';
import M from 'materialize-css';
import { SideNav, Button, SideNavItem } from 'react-materialize';

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
                        <a href="/" className="sidenav-trigger" data-target="mobile-links">
                            <div>
                                <SideNav trigger={<Button />} options={{ closeOnClick: true }}>
                                    <i className="material-icons">menu</i>
                                    <SideNavItem userView user={{
                                        background: 'https://placeimg.com/640/480/tech',
                                        image: 'static/media/react-materialize-logo.824c6ea3.svg',
                                        name: 'John Doe',

                                    }} />
                                    <SideNavItem href="#!icon" icon="cloud">
                                        First Link With Icon
                                    </SideNavItem>
                                    <SideNavItem href="#!second">
                                        Second Link
                                    </SideNavItem>
                                    <SideNavItem divider />
                                    <SideNavItem subheader>
                                        Subheader
                                    </SideNavItem>
                                    <SideNavItem waves href="#!third">
                                        Third Link With Waves
                                    </SideNavItem>
                                </SideNav>
                            </div>

                        </a>
                        <ul id="navbar-links" className="right hide-on-med-and-down">
                            <li><a href="/Home" className="homeLink lnk">Home</a></li>
                            <li><a href="/Profile" className="profileLink lnk">My Profile</a></li>
                            <li><a href="/Contact" className="contactLink lnk">Contact Us</a></li>
                        </ul>
                    </div>

                </nav>
            </header>
        )
    }
}
export default Navbar