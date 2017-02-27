import React, { Component, PropTypes } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class Response extends Component {

    static propTypes = {
        date: PropTypes.string,
        time: PropTypes.string
    };

    render() {
        return (
            <div className="response col-md-6">
                <CollapsibleContainer title={'Your response'}>
                    <span className="text">
                        You have withdrawn your acceptance of the offer
                    </span>
                    <div className="response__bottom row">
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
        );
    }
}
