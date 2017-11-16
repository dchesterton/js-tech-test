import React from 'react';
import EventList from './EventList';

class EventsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'loading',
            data: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8888/football/live?primaryMarkets=true')
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data,
                    status: null,
                });
            })
            .catch(err => {
                console.error(err);

                this.setState({
                    data: null,
                    status: 'error',
                });
            });
    }

    render() {
        const {status, data} = this.state;

        if (status === 'loading') {
            return <div>Loading events...</div>;
        }

        if (status === 'error') {
            return <div>There was an error loading the events, please try again</div>;
        }

        return <EventList data={data} {...this.props} />;
    }
}

export default EventsContainer;
