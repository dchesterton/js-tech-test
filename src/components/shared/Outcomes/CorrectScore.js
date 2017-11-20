import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import Outcome from './Outcome';

const CorrectScore = ({outcomes, isMarketSuspended}) => {
    const home = outcomes.filter(outcome => outcome.get('type') === 'home');
    const away = outcomes.filter(outcome => outcome.get('type') === 'away');
    const draw = outcomes.filter(outcome => outcome.get('type') === 'draw');

    const titleForScore = score => `${score.get('home')}-${score.get('away')}`;

    return (
        <div className="container-fluid">
            <div className="row outcome-score">
                <div className="col-xs-4 outcome-score-item">
                    {home.map(outcome => (
                        <Outcome key={outcome.get('outcomeId')} outcome={outcome} title={titleForScore(outcome.get('score'))} suspended={isMarketSuspended} />
                    ))}
                </div>

                <div className="col-xs-4 outcome-score-item">
                    {draw.map(outcome => (
                        <Outcome key={outcome.get('outcomeId')} outcome={outcome} title={titleForScore(outcome.get('score'))} suspended={isMarketSuspended} />
                    ))}
                </div>

                <div className="col-xs-4 outcome-score-item">
                    {away.map(outcome => (
                        <Outcome key={outcome.get('outcomeId')} outcome={outcome} title={titleForScore(outcome.get('score'))} suspended={isMarketSuspended} />
                    ))}
                </div>
            </div>
        </div>
    );
};

CorrectScore.propTypes = {
    outcomes: PropTypes.instanceOf(List),
    isMarketSuspended: PropTypes.bool.isRequired,
};

export default CorrectScore;
