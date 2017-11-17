import React from 'react';

import Event from './Event';
import {mergeEventData} from '../util';

class EventContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'loading',
            event: null,
        };
    }

    componentDidMount() {
        const eventId = this.props.match.params.id;

        fetch(`http://localhost:8888/sportsbook/event/${eventId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                const event = mergeEventData(data.event, data.markets, data.outcomes);

                this.setState({
                    event,
                    status: null,
                });
            })
            .catch(err => {
                console.error(err);

                this.setState({
                    event: null,
                    status: 'error',
                });
            });
    }

    render() {
        const {status, event} = this.state;

        if (status === 'loading') {
            return <div>Loading event...</div>;
        }

        if (status === 'error') {
            return <div>There was an error loading the event, please try again</div>;
        }

        console.log(event);

        return <Event event={event} {...this.props} />;
    }
}

export default EventContainer;
