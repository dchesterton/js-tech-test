import {connect} from 'react-redux';
import Event from './Event';
import {fetchEventIfNeeded} from '../../actions/event';

const mapStateToProps = ({data}, ownProps) => {
    const eventId = parseInt(ownProps.match.params.id, 10);

    const event = data.events.find(event => event.get('eventId') === eventId);
    const markets = data.markets.get(eventId.toString());

    return {eventId: eventId, event, markets, status: data.statuses[`event_${eventId}`]};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: eventId => {
            dispatch(fetchEventIfNeeded(eventId));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Event)
