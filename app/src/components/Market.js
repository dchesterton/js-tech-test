import React from 'react';
import PropTypes from 'prop-types';

import Outcome from './Outcome';

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingOutcomes: props.showOutcomes || false,
            loadingOutcomes: false,
        };
    }

    toggleOutcomes() {
        if (!this.state.showingOutcomes) {
            if (!this.props.market.outcomes.length) {
                this.setState({
                    loadingOutcomes: true,
                });
            }
        }

        this.setState({
            showingOutcomes: !this.state.showingOutcomes
        });
    }

    render() {
        const {market} = this.props;
        const {showingOutcomes, loadingOutcomes} = this.state;

        return (
            <div>
                <div onClick={this.toggleOutcomes.bind(this)}><strong>{market.name}</strong></div>

                {loadingOutcomes?
                    <div>Loading...</div>
                :showingOutcomes?
                    <ul className="list-unstyled">
                        {market.outcomes.map(outcome => <Outcome outcome={outcome} key={outcome.outcomeId} />)}
                    </ul>
                : null}
            </div>
        )
    }
}

Market.propTypes = {
    market: PropTypes.object.isRequired,
    showOutcomes: PropTypes.bool,
};

export default Market;
