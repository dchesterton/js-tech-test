import React from 'react';
import {shallow} from 'enzyme';
import {fromJS, List} from 'immutable';

import Standard from './Standard';
import Outcome from './Outcome';

it('renders without crashing', () => {
    shallow(<Standard outcomes={fromJS([{outcomeId: 1, price: {}}])} isMarketSuspended={false} />);
});

it('renders name', () => {
    const name = 'Outcome Name';
    const outcomes = fromJS([{outcomeId: 1, name: name, price: {}}]);

    const wrapper = shallow(<Standard outcomes={outcomes} isMarketSuspended={true} />);

    expect(wrapper).toIncludeText(name);
});

it('renders outcomes', () => {
    const isMarketSuspended = true;

    const price = {decimal: 1.1};
    const outcome1 = fromJS({outcomeId: 1, name: 'Name', price});
    const outcome2 = fromJS({outcomeId: 2, name: 'Name', price});
    const outcomes = List([outcome1, outcome2])

    const wrapper = shallow(<Standard outcomes={outcomes} isMarketSuspended={isMarketSuspended} />);

    expect(wrapper.find(Outcome)).toHaveLength(2);
    expect(wrapper).toContainReact(<Outcome outcome={outcome1} title="" suspended={isMarketSuspended} />);
    expect(wrapper).toContainReact(<Outcome outcome={outcome2} title="" suspended={isMarketSuspended} />);
});
