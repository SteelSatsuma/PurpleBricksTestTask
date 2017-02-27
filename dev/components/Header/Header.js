import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__inner container">
                    <div className="header__inner__logo col-md-6">
                        <span className="header__inner__logo__welcome">welcome to the</span>
                        <span className="header__inner__logo__ezie">eZie</span>
                        <span className="r">&#9415;</span> 
                        system
                    </div>
                    <div className="header__title col-md-6">
                        <h3>Secure negotiation centre</h3>
                    </div>
                </div>
            </header>
        );
    }
}
