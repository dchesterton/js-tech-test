import React from 'react';
import {shallow} from 'enzyme';
import {Map, List, fromJS} from 'immutable';

import EventGroup from './EventGroup';
import EventList from './EventList';

it('renders without crashing', () => {
    shallow(<EventGroup title="" events={[]} markets={Map()} showPrimaryMarkets={true} />);
});

it('renders group title', () => {
    const title = 'Group Title';
    const wrapper = shallow(<EventGroup title={title} events={[]} markets={Map()} showPrimaryMarkets={true} />);

    expect(wrapper).toContainReact(<h3>{title}</h3>);
});

it('renders event list', () => {
    const events = [];
    const markets = Map();
    const showPrimaryMarkets = true;

    const wrapper = shallow(<EventGroup title="" events={events} markets={markets} showPrimaryMarkets={showPrimaryMarkets} />);

    expect(wrapper).toContainReact(<EventList events={events} markets={markets} showPrimaryMarkets={showPrimaryMarkets} />);
});
