import {connect} from 'react-redux';
import EventSelector from './EventSelector';
import {fetchEventsIfNeeded} from '../../actions/events';

const mapStateToProps = ({data}, ownProps) => {
    // filter out the current event
    const eventsData = data.events.filter(event => {
        return event.get('eventId') !== ownProps.current;
    });

    return {
        events: eventsData,
        status: data.statuses['all'],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => {
            dispatch(fetchEventsIfNeeded());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventSelector)
