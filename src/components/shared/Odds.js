import React from 'react';
import PropTypes from 'prop-types';
import {ODDS_FRACTIONAL, ODDS_DECIMAL} from '../../constants';

const Odds = ({price, display}) => {
    switch (display) {
    case ODDS_FRACTIONAL:
        return <span className="outcome-price">{price.num}/{price.den}</span>;
    case ODDS_DECIMAL:
        return <span className="outcome-price">{price.decimal}</span>;
    default:
        return <span />;
    }
}

Odds.propTypes = {
    price: PropTypes.shape({
        num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        den: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        decimal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
    display: PropTypes.oneOf([ODDS_FRACTIONAL, ODDS_DECIMAL]).isRequired,
};

export default Odds;
