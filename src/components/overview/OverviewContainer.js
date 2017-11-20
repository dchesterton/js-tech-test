import {connect} from 'react-redux';
import Overview from './Overview';
import {fetchEventsIfNeeded} from '../../actions/events';

const mapStateToProps = ({data}) => {
    return {
        events: data.events,
        markets: data.markets,
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
)(Overview)
