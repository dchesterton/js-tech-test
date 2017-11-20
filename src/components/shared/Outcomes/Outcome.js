import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

import Odds from '../OddsContainer';

const Outcome = ({outcome, title, suspended}) => {
    const isSuspended = suspended? suspended: outcome.get('status').get('suspended');

    let classNames = 'outcome-price-wrapper';

    if (isSuspended) {
        classNames += ' outcome-price-wrapper-suspended';
    }

    return (
        <div className={classNames}>
            {isSuspended?
                <strong>Susp.</strong>:
                <div><strong>{title}</strong> <Odds price={outcome.get('price').toJS()} /></div>
            }
        </div>
    );
};

Outcome.propTypes = {
    outcome: PropTypes.instanceOf(Map).isRequired,
    title: PropTypes.string.isRequired,
    suspended: PropTypes.bool.isRequired,
};

export default Outcome;
