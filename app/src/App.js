import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import OverviewContainer from './overview/OverviewContainer';
import EventContainer from './event/EventContainer';

import {ODDS_FRACTIONAL, ODDS_DECIMAL} from './constants';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {oddsDisplay: ODDS_FRACTIONAL};
    }

    toggleOddsDisplay(oddsDisplay) {
        this.setState({oddsDisplay});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>
                                Latest Football Odds

                                <div className="btn-group pull-right">
                                    <OddsButton title="Fractional" active={this.state.oddsDisplay === ODDS_FRACTIONAL} onClick={this.toggleOddsDisplay.bind(this, ODDS_FRACTIONAL)} />
                                    <OddsButton title="Decimal" active={this.state.oddsDisplay === ODDS_DECIMAL} onClick={this.toggleOddsDisplay.bind(this, ODDS_DECIMAL)} />
                                </div>
                            </h2>
                        </div>
                    </div>

                    <Route exact path="/" component={OverviewContainer} />
                    <Route exact path="/event/:id" component={EventContainer} />
                </div>
            </BrowserRouter>
        );
    }
}

const OddsButton = ({title, active, ...props}) => {
    let classNames = 'btn btn-default';

    if (active) {
        classNames += ' active';
    }

    return <button type="button" className={classNames} {...props}>{title}</button>;
};

export default App;
