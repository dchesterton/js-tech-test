import React from 'react';
import {Link} from 'react-router-dom';

class Event extends React.Component {
    render() {
        return (
            <div>
                <div><Link to="/">Go back</Link></div>

                ID: {this.props.data.event.eventId}
            </div>
        );
    }
}

export default Event;
