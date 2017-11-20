import React from 'react';
import {shallow} from 'enzyme';

import Odds from './Odds';

const price = {num: '1', den: '10', decimal: '1.115'};

it('renders without crashing', () => {
    shallow(<Odds price={price} display="fractional" />);
});

it('renders fractional odds', () => {
    const expected = <span className="outcome-price">1/10</span>;
    const wrapper = shallow(<Odds display="fractional" price={price} />);

    expect(wrapper).toContainReact(expected);
});

it('renders decimal odds', () => {
    const expected = <span className="outcome-price">1.115</span>;
    const wrapper = shallow(<Odds display="decimal" price={price} />);

    expect(wrapper).toMatchElement(expected);
});
