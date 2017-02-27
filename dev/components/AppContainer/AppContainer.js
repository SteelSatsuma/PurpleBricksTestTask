import React, { Component } from 'react';
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import BuyerDetails from '../BuyerDetails/BuyerDetails';
import Offer from '../Offer/Offer';
import Response from '../Response/Response';
import Negotiations from '../Negotiations/Negotiations';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class AppContainer extends Component { // eslint-disable-line
    render() {
        const address = 'Eddington House, 16 Wigginton Road, Tamworth, B79 8PB';
        const price = 189950;
        const offerPrice = 179000;
        const buyerDetailsObject = {
            name: {
                label: 'Name',
                value: 'Mr David Shepherd'
            },
            buyPos: {
                label: 'Buying position',
                value: 'Property to sell - 20 weeks on the market'
            },
            finPos: {
                label: 'Financial position',
                value: 'Mortgage required - approved'
            },
            timeScale: {
                label: 'Timescale',
                value: 'Would like to move in 10 weeks - no chain'
            }
        }
        const offerDate = '24/10/2013';
        const offerTime = '20.17';
        const responseDate = '24/10/2013';
        const responseTime = '21.05';

        return (
            <div>
                <Header />
                <div className="container main">
                    <div className="status-wrapper">
                        <span className="status-label">Status: </span>
                        <span className="status">Withdrawn</span>
                    </div>
                    <PropertyDetails address={address} price={price} />
                    <BuyerDetails details={buyerDetailsObject} />
                    <div className="row">
                        <Offer offerPrice={offerPrice} date={offerDate} time={offerTime}/>
                        <Response date={offerDate} time={offerTime}/>
                    </div>
                    <Negotiations />
                    <Footer />
                </div>
            </div>
        );
    }
}
