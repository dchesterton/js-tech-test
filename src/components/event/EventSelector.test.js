import React from 'react';
import {shallow} from 'enzyme';
import {List, fromJS} from 'immutable';

import EventSelector from './EventSelector';

it('renders without crashing', () => {
    shallow(<EventSelector fetchEvents={()=>{}} onChange={()=>{}} events={List()} />);
});

it('renders loading spinner', () => {
    const wrapper = shallow(<EventSelector fetchEvents={()=>{}} onChange={()=>{}} events={List()} status="loading" />);
    expect(wrapper).toContainReact(<option>Loading events...</option>);
});

it('renders error', () => {
    const wrapper = shallow(<EventSelector fetchEvents={()=>{}} onChange={()=>{}} events={List()} status="error" />);
    expect(wrapper).toContainReact(<option>Error loading events</option>);
});

it('calls fetchEvents', () => {
    let fetchEventsCalled = false;

    const fetchEvents = () => {
        fetchEventsCalled = true;
    };

    const wrapper = shallow(<EventSelector fetchEvents={fetchEvents} onChange={()=>{}} events={List()} />);

    expect(fetchEventsCalled).toEqual(true);
});

it('calls onChange when select changes', () => {
    let onChangeCalled = false;

    const onChange = () => {
        onChangeCalled = true;
    };

    const wrapper = shallow(<EventSelector fetchEvents={()=>{}} onChange={onChange} events={List()} />);

    const select = wrapper.find('select');
    select.simulate('change');

    expect(onChangeCalled).toEqual(true);
});

it('renders options with placeholder', () => {
    const events = fromJS([{eventId: 1, name: 'Event 1'}, {eventId: 2, name: 'Event 2'}]);

    const wrapper = shallow(<EventSelector fetchEvents={()=>{}} onChange={()=>{}} events={events} />);

    expect(wrapper.find('option')).toHaveLength(3);
    expect(wrapper).toContainReact(<option value={1}>Event 1</option>);
    expect(wrapper).toContainReact(<option value={2}>Event 2</option>);
});
