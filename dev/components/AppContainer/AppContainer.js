import React, { Component } from 'react';
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import BuyerDetails from '../BuyerDetails/BuyerDetails';
import Offer from '../Offer/Offer';
import Response from '../Response/Response';
import Negotiations from '../Negotiations/Negotiations';
import Footer from '../Footer/Footer';

export default class AppContainer extends Component { // eslint-disable-line
    render() {
        return (
            <div className="container main">
                <header className="main__topBar">
                    welcome to the Ezie system
                    <div className="title">
                        Secure negotiation centre
                    </div>
                </header>
                Hello, world
                <PropertyDetails />
                <BuyerDetails />
                <div className="row">
                    <Offer />
                    <Response />
                </div>
                <Negotiations />
                <Footer />
            </div>
        );
    }
}
