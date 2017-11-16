import React from 'react';
import PropTypes from 'prop-types';

import Odds from './Odds';

const Outcome = ({outcome, ...props}) => (
    <li>
        {outcome.name}

        <div className="pull-right">
            <Odds price={outcome.price} {...props} />
        </div>
    </li>
);

Outcome.propTypes = {
    outcome: PropTypes.object.isRequired,
};

export default Outcome;
