import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';

export default class Negotiations extends Component {
    render() {
        return (
            <div className="negotiations">
                <CollapsibleContainer title={'Re-open negotiations'}>
                    Would you like your exper, blah blah?
                </CollapsibleContainer>
            </div>
        );
    }
}
