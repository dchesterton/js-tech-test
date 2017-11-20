import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import Outcome from './Outcome';

const Standard = ({outcomes, isMarketSuspended}) => (
    <ul className="list-unstyled outcome-standard">
        {outcomes.map(outcome => (
            <li key={outcome.get('outcomeId')} className="outcome-standard-item">
                <div className="outcome-standard-item-price">
                    <Outcome outcome={outcome} title="" suspended={isMarketSuspended} />
                </div>

                <h5 className="outcome-standard-item-name">
                    {outcome.get('name')}
                </h5>
            </li>
        ))}
    </ul>
);

Standard.propTypes = {
    outcomes: PropTypes.instanceOf(List).isRequired,
    isMarketSuspended: PropTypes.bool.isRequired,
};

export default Standard;
