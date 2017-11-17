import React from 'react';
import Overview from './Overview';
import {mergeEventData} from '../../util';

class OverviewContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'loading',
            events: null,
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
                const events = data.events.map(event => mergeEventData(event, data.markets, data.outcomes));

                this.setState({
                    events,
                    status: null,
                });
            })
            .catch(err => {
                console.error(err);

                this.setState({
                    events: null,
                    status: 'error',
                });
            });
    }

    render() {
        const {status, events} = this.state;

        if (status === 'loading') {
            return <div>Loading events...</div>;
        }

        if (status === 'error') {
            return <div>There was an error loading the events, please try again</div>;
        }

        return <Overview events={events} {...this.props} />;
    }
}

export default OverviewContainer;
