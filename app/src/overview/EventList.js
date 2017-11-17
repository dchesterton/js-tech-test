import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event';

const EventList = ({events, showPrimaryMarkets, ...props}) => {
    return (
        <ul className="list-group">
            {events.map(event => {
                const primaryMarket = showPrimaryMarkets? event.markets[0]: null;
                return <Event event={event} primaryMarket={primaryMarket} key={event.eventId} {...props} />;
            })}
        </ul>
    );
};

EventList.propTypes = {
    events: PropTypes.array.isRequired,
    showPrimaryMarkets: PropTypes.bool.isRequired,
};

export default EventList;
