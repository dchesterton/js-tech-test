import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import {formatDate} from '../../util';

const EventSummary = ({event}) => (
    <div className="text-center" style={{margin: '7px 0 15px'}}>
        <h4>
            {event.get('name')}<br />
            <small>
                {event.get('linkedEventTypeName')? event.get('linkedEventTypeName'): event.get('typeName')}. {formatDate(event.get('startTime'))}
            </small>
        </h4>
    </div>
);

EventSummary.propTypes = {
    event: PropTypes.instanceOf(Map).isRequired,
};

export default EventSummary;
