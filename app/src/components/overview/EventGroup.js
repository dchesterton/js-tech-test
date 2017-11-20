import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import EventList from './EventList';

const EventGroup = ({title, events, markets, showPrimaryMarkets}) => (
    <div>
        <h3>{title}</h3>
        <EventList events={events} markets={markets} showPrimaryMarkets={showPrimaryMarkets} />
    </div>
);

EventGroup.propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(Map).isRequired,
    markets: PropTypes.instanceOf(Map).isRequired,
    showPrimaryMarkets: PropTypes.bool.isRequired,
};

export default EventGroup;
