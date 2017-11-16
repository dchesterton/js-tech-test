import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event';

// check that all the events have a matching market and outcomes
const filterInvalidEvents = data => {
    return data.events.filter(event => {
        const markets = data.markets[event.eventId];

        if (!Array.isArray(markets) || !markets.length) {
            return false;
        }

        const outcomes = data.outcomes[markets[0].marketId];

        if (!Array.isArray(outcomes) || !outcomes.length) {
            return false;
        }

        return true;
    });
};

const EventList = ({data, showPrimaryMarkets, ...props}) => {
    const events = filterInvalidEvents(data);

    return (
        <ul className="list-group">
            {events.map(event => {
                const primaryMarket = showPrimaryMarkets? data.markets[event.eventId][0]: null;
                const outcomes = showPrimaryMarkets? data.outcomes[primaryMarket.marketId]: [];

                return <Event event={event} primaryMarket={primaryMarket} outcomes={outcomes} key={event.eventId} {...props} />;
            })}
        </ul>
    );
};

EventList.propTypes = {
    data: PropTypes.object.isRequired,
    showPrimaryMarkets: PropTypes.bool.isRequired,
};

export default EventList;
