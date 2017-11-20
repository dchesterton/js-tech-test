import React from 'react';
import {shallow} from 'enzyme';
import {Map, List, fromJS} from 'immutable';

import EventList from './EventList';
import Event from './Event';

it('renders without crashing', () => {
    shallow(<EventList events={List()} markets={Map()} showPrimaryMarkets={true} />);
});

it('does not render markets when showPrimaryMarkets is false', () => {
    const event1 = Map({eventId: 10});
    const event1market = Map({marketId: 20});

    const event2 = Map({eventId: 11});
    const event2market = Map({marketId: 21});

    const events = List([event1, event2]);
    const markets = Map({[event1.get('eventId')]: List([event1market]), [event2.get('eventId')]: List([event2market])});

    const wrapper = shallow(<EventList events={events} markets={markets} showPrimaryMarkets={false} />);

    const reactEvent1 = <Event event={event1} primaryMarket={null} />;
    const reactEvent2 = <Event event={event2} primaryMarket={null} />;

    expect(wrapper.find(Event)).toHaveLength(2);
    expect(wrapper).toContainReact(reactEvent1);
    expect(wrapper).toContainReact(reactEvent2);
});

it('renders events', () => {
    const event1 = Map({eventId: 10});
    const event1market = Map({marketId: 20});

    const event2 = Map({eventId: 11});
    const event2market = Map({marketId: 21});

    const events = List([event1, event2]);
    const markets = Map({[event1.get('eventId')]: List([event1market]), [event2.get('eventId')]: List([event2market])});

    const wrapper = shallow(<EventList events={events} markets={markets} showPrimaryMarkets={true} />);

    expect(wrapper.find(Event)).toHaveLength(2);
    expect(wrapper).toContainReact(<Event event={event1} primaryMarket={event1market} />);
    expect(wrapper).toContainReact(<Event event={event2} primaryMarket={event2market} />);
});
