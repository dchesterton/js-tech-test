import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import Market from './Market';
import Outcome from './Outcome';

it('renders without crashing', () => {
    shallow(<Market market={{}} outcomes={[]} />);
});

it('renders name', () => {
    const market = {name: 'Market Name'};
    const wrapper = shallow(<Market market={market} outcomes={[]} />);

    expect(wrapper).toIncludeText(market.name);
});

it('renders outcomes', () => {
    const outcome1 = {outcomeId: 1, price: {}};
    const outcome2 = {outcomeId: 2, price: {}};

    const wrapper = shallow(<Market market={{}} outcomes={[outcome1, outcome2]} oddsDisplay="fractional" />);

    expect(wrapper.find(Outcome)).toHaveLength(2);

    const reactOutcome1 = <Outcome outcome={outcome1} oddsDisplay="fractional" />;
    const reactOutcome2 = <Outcome outcome={outcome2} oddsDisplay="fractional" />;

    expect(wrapper).toContainReact(reactOutcome1);
    expect(wrapper).toContainReact(reactOutcome2);
});
