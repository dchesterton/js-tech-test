import React from 'react';
import {shallow} from 'enzyme';
import {fromJS} from 'immutable';

import Outcome from './Outcome';
import Odds from '../OddsContainer';

it('renders without crashing', () => {
    shallow(<Outcome title="" outcome={fromJS({price: {}, status: {suspended: false}})} />);
});

it('renders title', () => {
    const title = 'Outcome Name';
    const wrapper = shallow(<Outcome title={title} outcome={fromJS({price: {}, status: {suspended: false}})} />);

    expect(wrapper.find('strong')).toIncludeText(title);
});

it('renders price', () => {
    const price = {den: 10, num: 1, decimal: 1};

    const wrapper = shallow(<Outcome title="" outcome={fromJS({price: price, status: {suspended: false}})} />);

    expect(wrapper.find(Odds)).toHaveLength(1);
    expect(wrapper.find(Odds)).toHaveProp('price', price);
});

it('renders suspended', () => {
    const wrapper = shallow(<Outcome title="" outcome={fromJS({price: {}, status: {suspended: true}})} />);

    expect(wrapper).toIncludeText('Susp.');
    expect(wrapper).toHaveProp('className', 'outcome-price-wrapper outcome-price-wrapper-suspended')
});

it('renders not suspended', () => {
    const wrapper = shallow(<Outcome title="" outcome={fromJS({price: {}, status: {suspended: false}})} />);

    expect(wrapper).not.toIncludeText('Susp.');
    expect(wrapper).toHaveProp('className', 'outcome-price-wrapper')
});
