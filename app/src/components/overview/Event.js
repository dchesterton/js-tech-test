import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import Market from '../shared/Market';
import {Link} from 'react-router-dom';

const Event = ({event, primaryMarket}) => (
    <li className="list-group-item">
        <Link className="btn btn-sm btn-primary pull-right" to={`/event/${event.get('eventId')}`}>View</Link>

        <h5>{event.get('name')}</h5>
        {primaryMarket? <Market market={primaryMarket} showOutcomes={true} />: null}
    </li>
)

Event.propTypes = {
    event: PropTypes.instanceOf(Map).isRequired,
    primaryMarket: PropTypes.instanceOf(Map),
};

export default Event;
