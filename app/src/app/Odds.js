import React from 'react';
import PropTypes from 'prop-types';
import {ODDS_FRACTIONAL, ODDS_DECIMAL} from '../constants';

const Odds = ({price, oddsDisplay}) => {
    switch (oddsDisplay) {
    case ODDS_FRACTIONAL:
        return <span>{price.num}/{price.den}</span>;
    case ODDS_DECIMAL:
        return <span>{price.decimal}</span>;
    default:
        return <span />
    }
}

Odds.propTypes = {
    price: PropTypes.object.isRequired,
    oddsDisplay: PropTypes.string.isRequired,
};

export default Odds;
