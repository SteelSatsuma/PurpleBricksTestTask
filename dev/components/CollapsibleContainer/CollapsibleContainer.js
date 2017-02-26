import React, { Component } from 'react';
import cx from 'classnames';

export default class CollapsibleContainer extends Component { // eslint-disable-line

    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        };
    }

    toggle() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {

        const contentStyles = cx(['collapsibleContainer__content', this.state.expanded ? 'collapsibleContainer__content--expanded' : '']);
        const buttonContent = this.state.expanded ? 'HIDE' : 'SHOW';

        return (
            <div className="collapsibleContainer">
                <div className="collapsibleContainer__top">
                    <div className="collapsibleContainer__top__title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <button className="collapsibleContainer__top__button" onClick={() => { this.toggle(); }}>
                        {buttonContent}
                        <i className="glyphicon glyphicon-chevron-down"></i>
                    </button>
                </div>
                <div className={contentStyles}>
                    {this.state.expanded && this.props.children}
                </div>
            </div>
        );
    }
}
