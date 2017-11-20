import React from 'react';
import {shallow} from 'enzyme';

import Event from './Event';
import Loading from '../shared/Loading';
import Error from '../shared/Error';

const match = {params: {id: 1}};

it('renders without crashing', () => {
    shallow(<Event fetchEvent={()=>{}} match={match} />);
});

it('renders loading spinner', () => {
    const wrapper = shallow(<Event fetchEvent={()=>{}} match={match} status="loading" />);
    expect(wrapper.find(Loading)).toHaveLength(1);
});

it('renders error', () => {
    const wrapper = shallow(<Event fetchEvent={()=>{}} match={match} status="error" />);
    expect(wrapper.find(Error)).toHaveLength(1);
});

it('calls fetchEvent', () => {
    let fetchEventCalled = false;

    const fetchEvent = id => {
        fetchEventCalled = true;
        expect(id).toEqual(1);
    };

    shallow(<Event fetchEvent={fetchEvent} match={match} />);

    expect(fetchEventCalled).toEqual(true);
});
