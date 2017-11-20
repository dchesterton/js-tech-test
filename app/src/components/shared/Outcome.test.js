import React from 'react';
import {shallow} from 'enzyme';
import {fromJS} from 'immutable';

import Outcome from './Outcome';
import OddsContainer from './OddsContainer';

it('renders without crashing', () => {
    shallow(<Outcome outcome={fromJS({price: {}})} />);
});

it('renders name', () => {
    const name = 'Outcome Name';
    const outcome = fromJS({name: name, price: {}});

    const wrapper = shallow(<Outcome outcome={outcome} />);

    expect(wrapper).toIncludeText(name);
});

it('renders odds', () => {
    const price = {decimal: 1.1};
    const outcome = {name: 'Name', price};

    const wrapper = shallow(<Outcome outcome={fromJS(outcome)} />);

    expect(wrapper.find(OddsContainer)).toHaveLength(1);
});
