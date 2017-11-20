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
        const {market} = this.props;
        const {showingOutcomes} = this.state;

        return (
            <div>
                <h5 onClick={this.toggleOutcomes.bind(this)}>
                    <strong>{market.get('name')}</strong>
                </h5>

                {showingOutcomes?
                    <OutcomeListContainer market={market} />
                : null}
            </div>
        )
    }
}

Market.propTypes = {
    market: PropTypes.instanceOf(Map).isRequired,
    showOutcomes: PropTypes.bool,
};

export default Market;
