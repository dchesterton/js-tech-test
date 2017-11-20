import React from 'react';
import {shallow} from 'enzyme';
import {fromJS} from 'immutable';

import Standard from './Standard';
import Outcome from './Outcome';

it('renders without crashing', () => {
    shallow(<Standard outcomes={fromJS([{outcomeId: 1, price: {}}])} />);
});

it('renders name', () => {
    const name = 'Outcome Name';
    const outcomes = fromJS([{outcomeId: 1, name: name, price: {}}]);

    const wrapper = shallow(<Standard outcomes={outcomes} />);

    expect(wrapper).toIncludeText(name);
});

it('renders outcomes', () => {
    const price = {decimal: 1.1};
    const outcomes = fromJS([{outcomeId: 1, name: 'Name', price}, {outcomeId: 2, name: 'Name', price}]);

    const wrapper = shallow(<Standard outcomes={outcomes} />);

    expect(wrapper.find(Outcome)).toHaveLength(2);
});
