import React from 'react';

import Market from '../shared/Market';

const MarketList = ({markets}) => (
    <ul className="list-group">
        {markets.map(market =>
            <li className="list-group-item" key={market.marketId}>
                <Market market={market} />
            </li>
        )}
    </ul>
);

export default MarketList;
