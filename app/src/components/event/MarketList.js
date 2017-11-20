import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import Market from '../shared/Market';

const MarketList = ({markets}) => (
    <ul className="list-group">
        {markets.map(market =>
            <li className="list-group-item" key={market.get('marketId')}>
                <Market market={market} />
            </li>
        )}
    </ul>
);

MarketList.propTypes = {
    markets: PropTypes.instanceOf(List).isRequired,
};

export default MarketList;
