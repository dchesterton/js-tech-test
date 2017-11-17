import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import Overview from './Overview';
import EventList from './EventList';

it('renders without crashing', () => {
    shallow(<Overview data={{}} />);
});

it('toggles markets on checkbox change', () => {
    const data = {events: []};

    const showingPrimary = <EventList data={data} showPrimaryMarkets={true} />;
    const hidingPrimary = <EventList data={data} showPrimaryMarkets={false} />;

    const wrapper = shallow(<Overview data={data} />);
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
