import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import Odds from './Odds';

it('renders without crashing', () => {
    shallow(<Odds price={{}} oddsDisplay="fractional" />);
});

it('renders fractional odds', () => {
    const price = {num: 1, den: 10};
    const expected = <span>1/10</span>;

    const wrapper = shallow(<Odds oddsDisplay="fractional" price={price} />);

    expect(wrapper).toContainReact(expected);
});

it('renders decimal odds', () => {
    const price = {decimal: 1.115};
    const expected = <span>1.115</span>;

    const wrapper = shallow(<Odds oddsDisplay="decimal" price={price} />);

    expect(wrapper).toMatchElement(expected);
});

it('renders empty span for unknown type', () => {
    const expected = <span />;

    const wrapper = shallow(<Odds oddsDisplay="other" price={{}} />);

    expect(wrapper).toContainReact(expected);
});
