import React from 'react';
import {shallow} from 'enzyme';
import {Map} from 'immutable';

import EventSummary from './EventSummary';

it('renders without crashing', () => {
    shallow(<EventSummary event={Map()} />);
});

it('renders linkedEventTypeName if available', () => {
    const linkedEventTypeName = 'Linked Event Type Name';
    const event = Map({linkedEventTypeName, typeName: 'Type Name'});

    const wrapper = shallow(<EventSummary event={event} />);

    expect(wrapper.find('small').text()).toMatch(linkedEventTypeName);
});

it('renders typeName when linkedEventTypeName is not available', () => {
    const typeName = 'Type Name';
    const event = Map({typeName});

    const wrapper = shallow(<EventSummary event={event} />);

    expect(wrapper.find('small').text()).toMatch(typeName);
});

it('renders event name', () => {
    const name = 'Event Name';
    const event = Map({name});

    const wrapper = shallow(<EventSummary event={event} />);

    expect(wrapper.find('h4').text()).toMatch(name);
});
