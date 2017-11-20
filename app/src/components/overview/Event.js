import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import Market from '../shared/Market';
import {Link} from 'react-router-dom';

const Event = ({event, primaryMarket}) => (
    <li className={classNames(primaryMarket)}>
        <h5>
            <Link to={`/event/${event.get('eventId')}`}>{event.get('name')}</Link>
        </h5>
        {primaryMarket? <Market market={primaryMarket} showOutcomes={true} />: null}
    </li>
);

const classNames = primaryMarket => {
    let classNames = 'collapsible-item';

    if (primaryMarket) {
        classNames += ' collapsible-item-open';
    }

    return classNames;
};

Event.propTypes = {
    event: PropTypes.instanceOf(Map).isRequired,
    primaryMarket: PropTypes.instanceOf(Map),
};

export default Event;
