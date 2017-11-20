import React from 'react';
import PropTypes from 'prop-types';

import {ODDS_FRACTIONAL, ODDS_DECIMAL} from '../constants';

const OddsToggle = ({display, onChange}) => (
    <div className="btn-group">
        <OddsButton title="Fractional" active={display === ODDS_FRACTIONAL} onClick={onChange.bind(this, ODDS_FRACTIONAL)} />
        <OddsButton title="Decimal" active={display === ODDS_DECIMAL} onClick={onChange.bind(this, ODDS_DECIMAL)} />
    </div>
);

OddsToggle.propTypes = {
    display: PropTypes.oneOf([ODDS_FRACTIONAL, ODDS_DECIMAL]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export const OddsButton = ({title, active, onClick}) => {
    let classNames = 'btn btn-sm btn-default';

    if (active) {
        classNames += ' active';
    }

    return <button type="button" className={classNames} onClick={onClick}>{title}</button>;
};

export default OddsToggle;
