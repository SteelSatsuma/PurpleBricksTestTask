import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class BuyerDetails extends Component {
    render() {
        return (
            <div className="buyerDetails row">
                <div className="buyerDetails__inner col-xs-12">
                    <CollapsibleContainer title={'Buyer\'s details'}>
                        Here go buyer details
                    </CollapsibleContainer>
                </div>
            </div>
        );
    }
}
