import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import EventSummary from './EventSummary';
import EventSelectorContainer from './EventSelectorContainer';
import MarketList from './MarketList';

import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Header from '../Header';

class Event extends React.Component {
    componentWillMount() {
        this.props.fetchEvent(parseInt(this.props.match.params.id, 10));
    }

    componentWillReceiveProps(props) {
        if (props.match.params.id !== this.props.match.params.id) {
            this.props.fetchEvent(parseInt(props.match.params.id, 10));
        }
    }

    change(event) {
        const id = event.target.value;

        if (id) {
            this.props.history.push(`/event/${id}`);
        }
    }

    render() {
        const {eventId, event, markets, status} = this.props;

        return (
            <div>
                <Header />
                <div className="row" style={{marginTop: '10px', marginBottom: '15px'}}>
                    <div className="col-md-12">
                        <EventSelectorContainer current={eventId} onChange={this.change.bind(this)} />

                        {status === 'loading'? <Loading />:
                            status === 'error'? <Error>There was an error loading the event, please try again</Error>:
                            event? <div>
                                <EventSummary event={event} />
                                <MarketList markets={markets} />
                            </div>
                        : null}
                    </div>
                </div>
            </div>
        );
    }
}

Event.propTypes = {
    event: PropTypes.instanceOf(Map),
    status: PropTypes.string,
    fetchEvent: PropTypes.func.isRequired,
};

export default Event;
