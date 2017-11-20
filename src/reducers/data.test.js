import reducer from './data';
import {fromJS} from 'immutable';

const getInitialState = () => {
    return {
        statuses: {},
        fetchedAll: false,
        fetchedFull: [1],
        events: fromJS([{eventId: 1}]),
        markets: fromJS({
            1: [{marketId: 1}, {marketId: 2}, {marketId: 3}]
        }),
        outcomes: fromJS({
            1: [{outcomeId: 1}, {outcomeId: 2}],
            2: [{outcomeId: 3}, {outcomeId: 4}]
        })
    };
};

// Events
it('reduces REQUEST_EVENTS', () => {
    const state = reducer(undefined, {
        type: 'REQUEST_EVENTS',
    });

    expect(state.statuses).toEqual({all: 'loading'});
});

it('reduces RECEIVE_EVENTS_ERROR', () => {
    const state = reducer(undefined, {
        type: 'RECEIVE_EVENTS_ERROR',
    });

    expect(state.statuses).toEqual({all: 'error'});
});

it('reduces RECEIVE_EVENTS', () => {
    const data = {
        events: [{eventId: 1}, {eventId: 10}, {eventId: 20}],
        markets: {
            1: [{marketId: 1}, {marketId: 2}],
            10: [{marketId: 10}],
            20: [{marketId: 20}]
        },
        outcomes: {
            1: [{outcomeId: 1}, {outcomeId: 2}],
            2: [{outcomeId: 3}, {outcomeId: 4}],
            10: [{outcomeId: 10}],
            20: [{outcomeId: 20}]
        },
    };

    const state = reducer(getInitialState(), {
        type: 'RECEIVE_EVENTS',
        data
    });

    expect(state.fetchedAll).toEqual(true);
    expect(state.statuses).toEqual({all: null});
    expect(state.events.size).toEqual(3);
    expect(state.markets.size).toEqual(3);
    expect(state.outcomes.size).toEqual(4);
});

// Individual Event
it('reduces REQUEST_EVENT', () => {
    const state = reducer(undefined, {
        type: 'REQUEST_EVENT',
        eventId: 1,
    });

    expect(state.statuses).toEqual({event_1: 'loading'});
});

it('reduces RECEIVE_EVENT_ERROR', () => {
    const state = reducer(undefined, {
        type: 'RECEIVE_EVENT_ERROR',
        eventId: 1,
    });

    expect(state.statuses).toEqual({event_1: 'error'});
});

it('reduces RECEIVE_EVENT', () => {
    const data = {
        event: {eventId: 10},
        markets: {10: [{marketId: 10}, {marketId: 20}]},
        outcomes: {
            10: [{outcomeId: 10}],
            20: [{outcomeId: 20}]
        }
    };

    const state = reducer(getInitialState(), {
        type: 'RECEIVE_EVENT',
        data
    });

    expect(state.fetchedFull).toEqual([1, 10]);
    expect(state.statuses).toEqual({event_10: null});
    expect(state.events.size).toEqual(2);
    expect(state.markets.size).toEqual(2);
    expect(state.outcomes.size).toEqual(4);
});

// Markets
it('reduces REQUEST_MARKET', () => {
    const state = reducer(undefined, {
        type: 'REQUEST_MARKET',
        marketId: 3,
    });

    expect(state.statuses).toEqual({market_3: 'loading'});
});

it('reduces RECEIVE_MARKET_ERROR', () => {
    const state = reducer(undefined, {
        type: 'RECEIVE_MARKET_ERROR',
        marketId: 3,
    });

    expect(state.statuses).toEqual({market_3: 'error'});
});

it('reduces RECEIVE_MARKET', () => {
    const data = {
        market: {marketId: 3},
        outcomes: {
            3: [{outcomeId: 10}, {outcomeId: 20}, {outcomeId: 30}],
        }
    };

    const state = reducer(getInitialState(), {
        type: 'RECEIVE_MARKET',
        data
    });

    expect(state.statuses).toEqual({market_3: null});
    expect(state.events.size).toEqual(1);
    expect(state.markets.size).toEqual(1);
    expect(state.outcomes.size).toEqual(3);
});

// Websockets
it('reduces PRICE_CHANGE and OUTCOME_STATUS', () => {
    const marketId = 2;
    const outcomeId = 3;

    const data = {
        eventId: 1,
        marketId,
        outcomeId,
        price: {decimal: '2.625', num: '13', den: '8'},
        status: {active: true, resulted: false, cashoutable: false, displayable: true, suspended: false, result: "-"}
    };

    ['PRICE_CHANGE', 'OUTCOME_STATUS'].map(type => {
        const state = reducer(getInitialState(), {type, data});
        const outcomes = state.outcomes.get(marketId.toString());

        expect(outcomes.size).toEqual(2);

        const outcome = outcomes.get(0);
        expect(outcome.get('price').toJS()).toEqual(data.price);
        expect(outcome.get('status').toJS()).toEqual(data.status);
    });
});
