import React from 'react';
import PropTypes from 'prop-types';
import {Map, List} from 'immutable';

import Event from './Event';

const EventList = ({events, markets, showPrimaryMarkets}) => {
    return (
        <ul className="list-group">
            {events.valueSeq().map(event => {
                const eventId = event.get('eventId');
                const primaryMarket = showPrimaryMarkets? markets.get(eventId.toString()).get(0): null;

                return <Event event={event} primaryMarket={primaryMarket} key={eventId} />;
            })}
        </ul>
    );
};

EventList.propTypes = {
    events: PropTypes.instanceOf(List).isRequired,
    markets: PropTypes.instanceOf(Map).isRequired,
    showPrimaryMarkets: PropTypes.bool.isRequired,
};

export default EventList;
