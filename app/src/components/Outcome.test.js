import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import Outcome from './Outcome';
import Odds from './Odds';

it('renders without crashing', () => {
    shallow(<Outcome outcome={{price: {}}} oddsDisplay="" />);
});

it('renders name', () => {
    const outcome = {name: 'Outcome Name', price: {}};

    const wrapper = shallow(<Outcome outcome={outcome} oddsDisplay="fractional" />);

    expect(wrapper).toIncludeText(outcome.name);
});

it('renders odds', () => {
    const oddsDisplay = "decimal";
    const price = {decimal: 1.1};
    const outcome = {name: 'Name', price};

    const wrapper = shallow(<Outcome outcome={outcome} oddsDisplay={oddsDisplay} />);

    const odds = <Odds price={price} oddsDisplay={oddsDisplay} />;

    expect(wrapper.find(Odds)).toHaveLength(1);
    expect(wrapper).toContainReact(odds);
});
