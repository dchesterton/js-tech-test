import React from 'react';
import {shallow} from 'enzyme';
import {Map, List} from 'immutable';

import Overview from './Overview';
import EventGroup from './EventGroup';

it('renders without crashing', () => {
    shallow(<Overview events={List()} markets={Map()} fetchEvents={()=>{}} />);
});

it('toggles markets on checkbox change', () => {
    const title = 'Football';
    const event = Map({typeName: title});
    const events = List([event]);
    const markets = Map();

    const showingPrimary = <EventGroup title={title} events={[event]} markets={markets} showPrimaryMarkets={true} />;
    const hidingPrimary = <EventGroup title={title} events={[event]} markets={markets} showPrimaryMarkets={false} />;

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

it('renders event groups by title', () => {
    const football = 'Football';
    const premierLeague = 'Premier League';

    const event1 = Map({typeName: football});
    const event2 = Map({linkedEventTypeName: football});
    const event3 = Map({typeName: premierLeague});

    const events = List([event1, event2, event3]);
    const markets = Map();

    const footballGroup = <EventGroup title={football} events={[event1, event2]} markets={markets} showPrimaryMarkets={false} />;
    const premierLeagueGroup = <EventGroup title={premierLeague} events={[event3]} markets={markets} showPrimaryMarkets={false} />;

    const wrapper = shallow(<Overview events={events} markets={markets} fetchEvents={()=>{}} />);

    expect(wrapper).toContainReact(footballGroup);
    expect(wrapper).toContainReact(premierLeagueGroup);
});
