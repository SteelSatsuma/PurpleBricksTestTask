import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';
import accounting from 'accounting';

export default class Offer extends Component {

    static propTypes = {
        offerPrice: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string
    };

    render() {
        const formattedPrice = accounting.formatMoney(this.props.offerPrice, { symbol: "£",  format: "%s%v", precision : 0 });

        return (
            <div className="col-md-6">
                <div className="offer">
                    <CollapsibleContainer title={'Buyer\'s offer'}>
                        <div className="offer__offerPrice">
                            {formattedPrice}
                        </div>
                        Subject to offer qualification by Purplebricks
                        <div className="offer__bottom row">
                            <button className="btn btn-default col-md-4">
                                VIEW COMMENTS
                            </button>
                            <span className="date col-md-4">
                                {`Date: ${this.props.date}`}
                            </span>
                            <span className="time col-md-3">
                                {`Time: ${this.props.time}`}
                            </span>
                        </div>
                    </CollapsibleContainer>
                </div>
            </div>
        );
    }
}
