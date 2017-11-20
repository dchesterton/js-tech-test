import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import OverviewContainer from './overview/OverviewContainer';
import EventContainer from './event/EventContainer';
import OddsToggle from './OddsToggleContainer';

const App = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>
                            <Link to="/">Latest Football Odds</Link>
                            <OddsToggle />
                        </h2>
                    </div>
                </div>

                <Route exact path="/" component={OverviewContainer} />
                <Route exact path="/event/:id" component={EventContainer} />
            </div>
        </BrowserRouter>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;
