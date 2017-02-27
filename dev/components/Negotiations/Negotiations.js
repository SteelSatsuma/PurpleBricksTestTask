import React, { Component } from 'react';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';
import accounting from 'accounting';

const MAX_OFFER = 10000000;
const MIN_OFFER = 1000;

export default class Negotiations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            rawValue: 0,
            error: false
        }
    }

    format(event) {
        this.setState({
            value: accounting.formatMoney(event.target.value, {format: "%v", precision : 0}),
            rawValue: accounting.unformat(event.target.value)
        });
    }

    submitOffer() {
        let error;

        if (this.state.rawValue <= MIN_OFFER) {
            error = 'Your offer might be too small.'
        } else if (this.state.rawValue >= MAX_OFFER) {
            error = 'Your offer exceeds the maximum allowed limit.'
        }

        if (!error) {
            console.log('The offer was submitted', {
                offer: this.state.rawValue,
                error: false
            })
        } else {
            this.setState({ error });
        }
    }

    render() {
        return (
            <div className="negotiations">
                <CollapsibleContainer title={'Re-open negotiations'}>
                    <div className="negotiations__box row">
                        <div className="negotiations__box__text col-md-9">
                            Would you like your Expert, Robert White, to negotiate on your behalf? It's completely free!
                        </div>
                        <div className="negotiations__negotiateBtnContainer col-md-3">
                            <button className="btn btn-primary">
                                NEGOTIATE FOR ME
                            </button>
                        </div>
                    </div>
                    {this.state.error && 
                        <div className="row negotiations__error bg-danger">
                            {this.state.error}
                        </div>
                    }
                    <div className="row negotiations__container">
                        <div className="negotiations__input col-md-7">
                            Enter an offer you would be willing to accept:
                            <div className="negotiations__input__inputGroup">
                                <label>£</label>
                                <input className="negotiations__input__inputGroup__inputBox" type="text" value={this.state.value} onChange={(event) => this.format(event) }/>
                            </div>
                            <button className="btn btn-primary">
                                ADD COMMENTS
                            </button>
                        </div>
                        <div className="negotiations__submitBtnContainer col-md-5">
                            <button className="negotiations__submitBtnContainer__submitBtn btn btn-secondary" onClick={() => this.submitOffer() }>
                                SUBMIT OFFER
                            </button>
                        </div>
                    </div>
                </CollapsibleContainer>
            </div>
        );
    }
}
