import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class Offer extends Component {
    render() {
        return (
            <div className="offer col-md-6">
                <CollapsibleContainer title={'Buyer\'s offer'}>
                    Here goes the offer
                </CollapsibleContainer>
            </div>
        );
    }
}
