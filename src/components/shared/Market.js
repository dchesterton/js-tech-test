import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import OutcomeListContainer from './OutcomeListContainer';

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingOutcomes: props.showOutcomes || false
        };
    }

    toggleOutcomes() {
        this.setState({
            showingOutcomes: !this.state.showingOutcomes
        });
    }

    render() {
        const {market, showName} = this.props;
        const {showingOutcomes} = this.state;

        let className = 'collapsible-item';

        if (showingOutcomes) {
            className += ' collapsible-item-open';
        }

        return (
            <div className={className}>
                {showName?
                    <h5>
                        <a onClick={this.toggleOutcomes.bind(this)}>
                            <strong>{market.get('name')}</strong>
                        </a>
                    </h5>
                :null}

                <div className="collapsible-item-content">
                {showingOutcomes?
                    <OutcomeListContainer market={market} />
                : null}
                </div>
            </div>
        )
    }
}

Market.propTypes = {
    market: PropTypes.instanceOf(Map).isRequired,
    showName: PropTypes.bool,
    showOutcomes: PropTypes.bool,
};

export default Market;
