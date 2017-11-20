import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import Outcome from './Outcome';

const WinDrawWin = ({outcomes}) => (
    <div className="container-fluid">
        <div className="row outcome-score">
            {outcomes.map(outcome => {
                const total = outcomes.size;
                const type = outcome.get('type');
                const title = type === 'draw'? 'Draw': 'Win';

                return (
                    <div key={outcome.get('outcomeId')} className={`col-xs-${12 / total} outcome-score-item`}>
                        <Outcome outcome={outcome} title={title} />
                    </div>
                )
            })}
        </div>
    </div>
);

WinDrawWin.propTypes = {
    outcomes: PropTypes.instanceOf(List),
};

export default WinDrawWin;
