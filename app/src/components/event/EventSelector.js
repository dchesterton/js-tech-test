import React from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';

class EventSelector extends React.Component {
    componentWillMount() {
        this.props.fetchEvents();
    }

    render() {
        const {status, onChange, events} = this.props;
        const style = {width: '100%'};

        if (status === 'loading') {
            return <select disabled style={style}><option>Loading events...</option></select>;
        }

        if (status === 'error') {
            return <select disabled style={style}><option>Error loading events</option></select>;
        }

        return (
            <select style={style} onChange={onChange.bind(this)}>
                <option value="" key="default">-- Select Event --</option>
                {events.valueSeq().map(event => (
                    <option value={event.get('eventId')} key={event.get('eventId')}>{event.get('name')}</option>
                ))}
            </select>
        );
    }
}

EventSelector.propTypes = {
    events: PropTypes.instanceOf(List).isRequired,
    status: PropTypes.string,
    fetchEvents: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default EventSelector;
