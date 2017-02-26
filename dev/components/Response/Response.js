import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class Response extends Component {
    render() {
        return (
            <div className="response col-md-6">
                <CollapsibleContainer title={'Your repsonse'}>
                    Here goes the red response thingy
                </CollapsibleContainer>
            </div>
        );
    }
}
