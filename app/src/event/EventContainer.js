import React from 'react';
import Event from './Event';

class EventContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'loading',
            data: null,
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
            return <div>Loading event...</div>;
        }

        if (status === 'error') {
            return <div>There was an error loading the event, please try again</div>;
        }

        return <Event data={data} {...this.props} />;
    }
}

export default EventContainer;
