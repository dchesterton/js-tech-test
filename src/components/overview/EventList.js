import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import Event from './Event';

const EventList = ({events, markets, showPrimaryMarkets}) => (
    <ul className="list-unstyled">
        {events.map(event => {
            const eventId = event.get('eventId');
            const primaryMarket = showPrimaryMarkets? markets.get(eventId.toString()).get(0): null;

            return <Event event={event} primaryMarket={primaryMarket} key={eventId} />;
        })}
    </ul>
);

EventList.propTypes = {
    events: PropTypes.arrayOf(Map).isRequired,
    markets: PropTypes.instanceOf(Map).isRequired,
    showPrimaryMarkets: PropTypes.bool.isRequired,
};

export default EventList;
