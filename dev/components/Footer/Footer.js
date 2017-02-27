import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__inner container">
                    <div className="footer__inner__links col-md-8">
                        <a href="#">CONTACT US</a>
                        <a href="#">FAQ</a>
                        <a href="#">JOIN THE TEAM</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">LIVE HELP</a>
                    </div>
                    <div className="footer__inner__social col-md-4">
                        <i className="icon-fontello-twitter"></i>
                        <i className="icon-fontello-facebook"></i>
                        <i className="icon-fontello-youtube"></i>
                        <i className="icon-fontello-pinterest"></i>
                        <i className="icon-fontello-gplus"></i>
                    </div>
                </div>
            </footer>
        );
    }
}