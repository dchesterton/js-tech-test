import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import OverviewContainer from './overview/OverviewContainer';
import EventContainer from './event/EventContainer';

const App = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="container-fluid">
                <Route exact path="/" component={OverviewContainer} />
                <Route exact path="/event/:id" component={EventContainer} />
            </div>
        </BrowserRouter>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
