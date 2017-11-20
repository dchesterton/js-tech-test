import React from 'react';
import PropTypes from 'prop-types';

import {Map, List} from 'immutable';

import EventGroup from './EventGroup';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Header from '../Header';

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showPrimary: false};
    }

    componentWillMount() {
        this.props.fetchEvents();
    }

    togglePrimary() {
        this.setState({showPrimary: !this.state.showPrimary});
    }

    groupEvents(events) {
        const groupedEvents = {};

        events.forEach(event => {
            const typeName = event.get('linkedEventTypeName') || event.get('typeName');

            if (!(typeName in groupedEvents)) {
                groupedEvents[typeName] = [];
            }

            groupedEvents[typeName].push(event);
        });

        return groupedEvents;
    }

    render() {
        const {events, markets, status} = this.props;

        if (status === 'loading') {
            return <Loading />;
        }

        if (status === 'error') {
            return <Error>There was an error loading the events, please try again</Error>;
        }

        const {showPrimary} = this.state;

        const groupedEvents = this.groupEvents(events);
        const eventGroups = [];

        for (let title in groupedEvents) {
            eventGroups.push(<EventGroup key={title} title={title} events={groupedEvents[title]} markets={markets} showPrimaryMarkets={showPrimary} />);
        }

        return (
            <div>
                <Header>
                    <label>
                        <input type="checkbox" checked={showPrimary} onChange={this.togglePrimary.bind(this)} />
                        &nbsp; Show primary markets?
                    </label>
                </Header>

                <div className="row">
                    <div className="col-md-12">
                        {eventGroups}
                    </div>
                </div>
            </div>
        );
    }
}

Overview.propTypes = {
    events: PropTypes.instanceOf(List).isRequired,
    markets: PropTypes.instanceOf(Map).isRequired,
    status: PropTypes.string,
    fetchEvents: PropTypes.func.isRequired,
};

export default Overview;
