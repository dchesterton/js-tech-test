import React from 'react';
import PropTypes from 'prop-types';

import Market from './Market';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {market: false};
    }

    toggleMarket() {
        this.setState({market: !this.state.market});
    }

    render() {
        const {market} = this.state;
        const {event, primaryMarket, outcomes, ...props} = this.props;

        return (
            <li className="list-group-item">
                <button className="btn btn-sm btn-default pull-right" onClick={this.toggleMarket.bind(this)}>
                    {market? 'Hide': 'Show'}
                </button>

                <h5>{event.name}</h5>

                {market? <Market market={primaryMarket} outcomes={outcomes} {...props} />: null}
            </li>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    primaryMarket: PropTypes.object.isRequired,
    outcomes: PropTypes.array.isRequired,
};

export default Event;
