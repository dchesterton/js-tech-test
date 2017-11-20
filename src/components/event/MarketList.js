import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import Market from '../shared/Market';

const MarketList = ({markets}) => (
    <ul className="list-unstyled">
        {markets.map(market =>
            <li key={market.get('marketId')}>
                <Market market={market} showName={true} />
            </li>
        )}
    </ul>
);

MarketList.propTypes = {
    markets: PropTypes.instanceOf(List).isRequired,
};

export default MarketList;
