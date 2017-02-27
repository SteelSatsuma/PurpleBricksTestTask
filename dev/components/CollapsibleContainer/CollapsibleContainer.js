import React, { Component } from 'react';
import cx from 'classnames';

export default class CollapsibleContainer extends Component { // eslint-disable-line

    static propTypes = {
        title: PropTypes.string
    };

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
        const icon = cx(['glyphicon', this.state.expanded ? 'glyphicon-menu-up' : 'glyphicon-menu-down']);

        return (
            <div className="collapsibleContainer">
                <div className="row collapsibleContainer__top">
                    <div className="collapsibleContainer__top__title col-xs-9">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="col-xs-3 collapsibleContainer__top__container">
                        <button className="collapsibleContainer__top__button" onClick={() => { this.toggle(); }}>
                            {buttonContent}
                            <i className={icon}></i>
                        </button>
                    </div>
                </div>
                <div className={contentStyles}>
                    {this.state.expanded && this.props.children}
                </div>
            </div>
        );
    }
}
