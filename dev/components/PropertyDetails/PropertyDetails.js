import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class PropertyDetails extends Component {
    render() {
        return (
            <div className="row propertyDetails">
                <CollapsibleContainer title={'The property'}>
                    Property Details
                    <button className="btn btn-default">
                        VIEW EXTRAS INCLUDED
                    </button>
                </CollapsibleContainer>
            </div>
        );
    }
}
