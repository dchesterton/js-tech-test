import React from 'react';
import PropTypes from 'prop-types';

import {formatDate} from '../../util';

const EventSummary = ({event}) => (
    <div className="text-center">
        <h4>
            {event.name}<br />
            <small>
                {event.linkedEventTypeName? event.linkedEventTypeName: event.typeName}. {formatDate(event.startTime)}
            </small>
        </h4>
    </div>
);

EventSummary.propTypes = {
    event: PropTypes.object.isRequired,
};

export default EventSummary;
