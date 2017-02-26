import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__inner container">
                    <div>
                        <a href="#">CONTACT US</a>
                        <a href="#">FAQ</a>
                        <a href="#">JOIN THE TEAM</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">LIVE HELP</a>
                    </div>
                    <div className="social">

                    </div>
                </div>
            </footer>
        );
    }
}
