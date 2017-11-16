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

it('toggles market on button click', () => {
    const market = <Market market={{}} outcomes={[]} />;
    const wrapper = shallow(<Event event={{}} primaryMarket={{}} outcomes={[]} />);
    const button = wrapper.find('button');

    // check market is not shown on initial render
    expect(wrapper).not.toContainReact(market);

    // now check it's shown after button click
    button.simulate('click');
    expect(wrapper).toContainReact(market);

    // ... and that another click hides it again
    button.simulate('click');
    expect(wrapper).not.toContainReact(market);
});
