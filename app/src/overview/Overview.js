import React from 'react';
import PropTypes from 'prop-types';

import EventList from './EventList';

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showPrimary: false};
    }

    togglePrimary() {
        this.setState({showPrimary: !this.state.showPrimary});
    }

    render() {
        const {events} = this.props;
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
                        <EventList events={events} showPrimaryMarkets={showPrimary} />
                    </div>
                </div>
            </div>
        );
    }
}

Overview.propTypes = {
    events: PropTypes.array.isRequired,
};

export default Overview;
