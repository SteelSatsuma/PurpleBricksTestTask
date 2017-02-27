import React, { Component, PropTypes } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class BuyerDetails extends Component {

    static propTypes = {
        details: PropTypes.object
    };


    renderDetails(obj, key) {
        return (
            <div className="buyerDetails__inner__row row" key={key}>
                <span className="buyerDetails__inner__row__label col-xs-2">{obj.label}</span>
                <span className="buyerDetails__inner__row__value col-xs-10">{obj.value}</span>
            </div>
        );
    }

    render() {
        return (
            <div className="buyerDetails row">
                <div className="buyerDetails__inner col-xs-12">
                    <CollapsibleContainer title={'Buyer\'s details'}>
                        {Object.keys(this.props.details).map((key) => this.renderDetails(this.props.details[key], key))}
                    </CollapsibleContainer>
                </div>
            </div>
        );
    }
}
