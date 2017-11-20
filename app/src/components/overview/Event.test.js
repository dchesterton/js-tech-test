import React from 'react';
import {shallow} from 'enzyme';
import {Map} from 'immutable';

import Event from './Event';
import Market from '../shared/Market';

it('renders without crashing', () => {
    shallow(<Event event={Map()} />);
});

it('renders event name', () => {
    const name = 'Event Name';
    const event = Map({name});
    const wrapper = shallow(<Event event={event} />);

    const expected = <h5>{name}</h5>;

    expect(wrapper).toContainReact(expected);
});

it('renders primary market', () => {
    const event = Map();
    const primaryMarket = Map();
    const wrapper = shallow(<Event event={event} primaryMarket={primaryMarket} />);

    expect(wrapper).toContainReact(<Market market={primaryMarket} showOutcomes={true} />);
});

it('does not render primary market when null', () => {
    const wrapper = shallow(<Event event={Map()} />);
    expect(wrapper.find(Market)).toHaveLength(0);
});
