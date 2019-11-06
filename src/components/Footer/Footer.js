import React from 'react';
import "./Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-copyright grey darken-2" id="footerRow">
                    <div className="footerItems">
                        © 2019 Copyright
                        </div>
                    <div className="footerItems">
                        <a className="" href="/Contact">Contact us</a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer