import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import Odds from './OddsContainer';

const Outcome = ({outcome}) => (
    <li>
        {outcome.get('name')}

        <div className="pull-right">
            <Odds price={outcome.get('price').toJS()} />
        </div>
    </li>
);

Outcome.propTypes = {
    outcome: PropTypes.instanceOf(Map).isRequired,
};

export default Outcome;
