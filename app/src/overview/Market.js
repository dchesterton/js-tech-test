import React from 'react';
import PropTypes from 'prop-types';

import Outcome from './Outcome';

const Market = ({market, outcomes, ...props}) => (
    <div>
        <strong>{market.name}</strong>

        <ul className="list-unstyled">
            {outcomes.map(outcome => <Outcome outcome={outcome} key={outcome.outcomeId} {...props} />)}
        </ul>
    </div>
);

Market.propTypes = {
    market: PropTypes.object.isRequired,
    outcomes: PropTypes.array.isRequired,
};

export default Market;
