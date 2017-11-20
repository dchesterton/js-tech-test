import React from 'react';
import {shallow} from 'enzyme';
import {Map, List} from 'immutable';

import Overview from './Overview';
import EventList from './EventList';

it('renders without crashing', () => {
    shallow(<Overview events={List()} markets={Map()} fetchEvents={()=>{}} />);
});

it('toggles markets on checkbox change', () => {
    const events = List();
    const markets = Map();

    const showingPrimary = <EventList events={events} markets={markets} showPrimaryMarkets={true} />;
    const hidingPrimary = <EventList events={events} markets={markets} showPrimaryMarkets={false} />;

    const wrapper = shallow(<Overview events={events} markets={markets} fetchEvents={()=>{}} />);
    const checkbox = wrapper.find('input');

    // check markets are not shown on initial render
    expect(wrapper).not.toContainReact(showingPrimary);
    expect(wrapper).toContainReact(hidingPrimary);

    // now check it's shown after checkbox changes
    checkbox.simulate('change');
    expect(wrapper).toContainReact(showingPrimary);
    expect(wrapper).not.toContainReact(hidingPrimary);

    // ... and that another click hides it again
    checkbox.simulate('change');
    expect(wrapper).not.toContainReact(showingPrimary);
    expect(wrapper).toContainReact(hidingPrimary);
});
