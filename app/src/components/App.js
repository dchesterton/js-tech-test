import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import OverviewContainer from './overview/OverviewContainer';
import EventContainer from './event/EventContainer';
import OddsToggle from '../containers/OddsToggleContainer';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>
                        Latest Football Odds
                        <OddsToggle />
                    </h2>
                </div>
            </div>

            <Route exact path="/" component={OverviewContainer} />
            <Route exact path="/event/:id" component={EventContainer} />
        </div>
    </BrowserRouter>
)

export default App;
