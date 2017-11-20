import React from 'react';
import PropTypes from 'prop-types';

import {Map, List} from 'immutable';

import EventList from './EventList';
import Loading from '../shared/Loading';
import Error from '../shared/Error';

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

    render() {
        const {events, markets, status} = this.props;

        if (status === 'loading') {
            return <Loading />;
        }

        if (status === 'error') {
            return <Error>There was an error loading the events, please try again</Error>;
        }

        const {showPrimary} = this.state;

        return (
            <div>
                <div className="row" style={{marginTop: '10px', marginBottom: '15px'}}>
                    <div className="col-md-12">
                        <label>
                            <input type="checkbox" checked={showPrimary} onChange={this.togglePrimary.bind(this)} />
                            &nbsp;&nbsp; Show primary market?
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <EventList events={events} markets={markets} showPrimaryMarkets={showPrimary} />
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
