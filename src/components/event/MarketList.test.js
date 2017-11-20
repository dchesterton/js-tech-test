import React from 'react';
import {shallow} from 'enzyme';
import {fromJS, List} from 'immutable';

import MarketList from './MarketList';
import Market from '../shared/Market';

it('renders without crashing', () => {
    shallow(<MarketList markets={List()} />);
});

it('renders markets', () => {
    const markets = [{marketId: 1}, {marketId: 2}];
    const wrapper = shallow(<MarketList markets={fromJS(markets)} />);

    expect(wrapper.find(Market)).toHaveLength(2);
});
