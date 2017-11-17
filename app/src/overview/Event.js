import React from 'react';
import PropTypes from 'prop-types';

import Market from '../components/Market';
import {Link} from 'react-router-dom';

const Event = ({event, primaryMarket, ...props}) => (
    <li className="list-group-item">
        <Link className="btn btn-sm btn-default pull-right" to={`/event/${event.eventId}`}>Show</Link>

        <h5>{event.name}</h5>
        {primaryMarket? <Market market={primaryMarket} showOutcomes={true} {...props} />: null}
    </li>
)

Event.propTypes = {
    event: PropTypes.object.isRequired,
    primaryMarket: PropTypes.object,
};

export default Event;
