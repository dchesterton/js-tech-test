import React from 'react';
import PropTypes from 'prop-types';

import Market from './Market';
import { Link } from 'react-router-dom';

const Event = ({event, primaryMarket, outcomes, ...props}) => (
    <li className="list-group-item">
        <Link className="btn btn-sm btn-default pull-right" to={`/event/${event.eventId}`}>Show</Link>

        <h5>{event.name}</h5>
        {primaryMarket? <Market market={primaryMarket} outcomes={outcomes} {...props} />: null}
    </li>
)

Event.propTypes = {
    event: PropTypes.object.isRequired,
    primaryMarket: PropTypes.object,
    outcomes: PropTypes.array.isRequired,
};

export default Event;
