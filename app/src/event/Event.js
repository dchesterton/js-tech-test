import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import EventSummary from './EventSummary';
import MarketList from './MarketList';

class Event extends React.Component {
    render() {
        const event = this.props.event;

        return (
            <div>
                <div><Link to="/">Go back</Link></div>

                <EventSummary event={event} />
                <MarketList markets={event.markets} />
            </div>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
};

export default Event;
