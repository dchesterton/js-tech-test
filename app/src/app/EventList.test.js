import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import EventList from './EventList';
import Event from './Event';

it('renders without crashing', () => {
    shallow(<EventList data={{events: []}} />);
});

it('renders events', () => {
    const event1 = {eventId: 10};
    const event1market = {marketId: 20};
    const event1marketOutcomes = [{outcomeId: 30}];

    const event2 = {eventId: 11};
    const event2market = {marketId: 21};
    const event2marketOutcomes = [{outcomeId: 31}];

    const data = {
        events: [event1, event2],
        markets: {[event1.eventId]: [event1market], [event2.eventId]: [event2market]},
        outcomes: {[event1market.marketId]: event1marketOutcomes, [event2market.marketId]: event2marketOutcomes},
    };

    const wrapper = shallow(<EventList data={data} />);

    const reactEvent1 = <Event event={event1} primaryMarket={event1market} outcomes={event1marketOutcomes} />;
    const reactEvent2 = <Event event={event2} primaryMarket={event2market} outcomes={event2marketOutcomes} />;

    expect(wrapper.find(Event)).toHaveLength(2);
    expect(wrapper).toContainReact(reactEvent1);
    expect(wrapper).toContainReact(reactEvent2);
});

it('ignores events which do not have a market or outcome', () => {
    const event1 = {eventId: 10};
    const event1market = {marketId: 20};

    const event2 = {eventId: 11};

    const data = {
        events: [event1, event2],
        markets: {10: [event1market]},
        outcomes: {},
    };

    const wrapper = shallow(<EventList data={data} />);

    expect(wrapper.find(Event)).toHaveLength(0);
});
