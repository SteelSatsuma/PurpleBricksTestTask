import React, { Component, PropTypes  } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';
import accounting from 'accounting';

export default class PropertyDetails extends Component {

    static propTypes = {
        price: PropTypes.number,
        address: PropTypes.string
    };


    render() {
        const formattedPrice = accounting.formatMoney(this.props.price, { symbol: "£",  format: "%s%v", precision : 0 });

        return (
            <div className="row propertyDetails">
                <CollapsibleContainer title={'The property'}>
                    <div className="propertyDetails__detailsBlock col-sm-8">
                        <div className="propertyDetails__detailsBlock__image">
                        </div>
                        <div className="propertyDetails__detailsBlock__address">
                            {this.props.address}
                        </div>
                    </div>
                    <div className="propertyDetails__priceBlock col-sm-4">
                        Asking price:
                        <div className="propertyDetails__priceBlock__price">
                            {formattedPrice}
                        </div>
                        <button className="btn btn-default">
                            VIEW EXTRAS INCLUDED
                        </button>
                    </div>
                </CollapsibleContainer>
            </div>
        );
    }
}
