import React from 'react';
import {shallow} from 'enzyme';
import {Map} from 'immutable';
import {Link} from 'react-router-dom';

import Event from './Event';
import Market from '../shared/Market';

it('renders without crashing', () => {
    shallow(<Event event={Map()} />);
});

it('renders event link', () => {
    const name = 'Event Name';
    const eventId = 1;
    const event = Map({eventId: eventId, name: name});

    const link = shallow(<Event event={event} />).find(Link);

    expect(link).toHaveLength(1);
    expect(link).toHaveProp('to', '/event/1');
    expect(link).toHaveProp('children', name);
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
