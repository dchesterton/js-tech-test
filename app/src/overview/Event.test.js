import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import Event from './Event';
import Market from './Market';

it('renders without crashing', () => {
    shallow(<Event event={{}} primaryMarket={{}} outcomes={[]} />);
});

it('renders event name', () => {
    const event = {name: 'Event Name'};
    const wrapper = shallow(<Event event={event} primaryMarket={{}} outcomes={[]} />);

    const expected = <h5>{event.name}</h5>;

    expect(wrapper).toContainReact(expected);
});
