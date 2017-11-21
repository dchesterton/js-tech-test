import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import Outcome from './Outcome';

export const MissingOutcome = () => (
    <div className="col-xs-4 outcome-score-item">
        <div className="outcome-price-wrapper">
            <strong>-</strong>
        </div>
    </div>
);

const getTitle = type => type === 'draw'? 'Draw': 'Win';

const renderOutcome = (outcomes, isMarketSuspended, key) => {
    if (outcomes.size > 0) {
        return outcomes.map(outcome => (
            <div key={key} className="col-xs-4 outcome-score-item">
                <Outcome outcome={outcome} title={getTitle(outcome.get('type'))} suspended={isMarketSuspended} />
            </div>
        ));
    }

    return <MissingOutcome key={key} />;
}

const WinDrawWin = ({outcomes, isMarketSuspended}) => {
    const home = outcomes.filter(outcome => outcome.get('type') === 'home');
    const draw = outcomes.filter(outcome => outcome.get('type') === 'draw');
    const away = outcomes.filter(outcome => outcome.get('type') === 'away');

    const homeOutcome = renderOutcome(home, isMarketSuspended, 'home');
    const drawOutcome = renderOutcome(draw, isMarketSuspended, 'draw');
    const awayOutcome = renderOutcome(away, isMarketSuspended, 'away');

    return (
        <div className="container-fluid">
            <div className="row outcome-score">
                {homeOutcome}
                {drawOutcome}
                {awayOutcome}
            </div>
        </div>
    );
};


WinDrawWin.propTypes = {
    outcomes: PropTypes.instanceOf(List),
    isMarketSuspended: PropTypes.bool.isRequired,
};

export default WinDrawWin;
