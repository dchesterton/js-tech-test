import {List, Map, fromJS} from 'immutable';

const mergeMarkets = (newMarkets, markets) => {
    return markets.mergeDeep(fromJS(newMarkets));
}

const mergeOutcomes = (newOutcomes, outcomes) => {
    return outcomes.mergeDeep(fromJS(newOutcomes));
}

const setStatus = (statuses, key, val) => {
    statuses[key] = val;
    return statuses;
}

const data = (state = {
    statuses: {},
    fetchedAll: false, // track whether we have fetched the full events list
    fetchedFull: [],   // track those events which we have fetched in full
    events: List(),
    markets: Map(),
    outcomes: Map(),
}, action) => {
    switch (action.type) {
        case 'REQUEST_EVENTS':
            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, 'all', 'loading'),
            });

        case 'RECEIVE_EVENTS_ERROR':
            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, 'all', 'error'),
            });

        case 'RECEIVE_EVENTS':
            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, 'all', null),
                fetchedAll: true,
                events: fromJS(action.data.events),
                markets: mergeMarkets(action.data.markets, state.markets),
                outcomes: mergeOutcomes(action.data.outcomes, state.outcomes),
            });

        case 'REQUEST_EVENT':
            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, `event_${action.eventId}`, 'loading'),
            });

        case 'RECEIVE_EVENT_ERROR':
            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, `event_${action.eventId}`, 'error'),
            });

        case 'RECEIVE_EVENT':
            const newEvent = Map(action.data.event);
            const newEventId = newEvent.get('eventId');
            let events = state.events;

            const existingIndex = events.findIndex(event => event.get('eventId') === newEventId);

            if (existingIndex > -1) {
                events = events.set(existingIndex, newEvent);
            } else {
                events = events.push(newEvent);
            }

            state.fetchedFull.push(newEventId);

            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, `event_${newEventId}`, null),
                events: events,
                markets: mergeMarkets(action.data.markets, state.markets),
                outcomes: mergeOutcomes(action.data.outcomes, state.outcomes),
            });

        case 'REQUEST_MARKET':
            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, `market_${action.marketId}`, 'loading'),
            });

        case 'RECEIVE_MARKET_ERROR':
            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, `market_${action.marketId}`, 'error'),
            });

        case 'RECEIVE_MARKET':
            const marketId = action.data.market.marketId;

            return Object.assign({}, state, {
                statuses: setStatus(state.statuses, `market_${marketId}`, null),
                outcomes: mergeOutcomes(action.data.outcomes, state.outcomes),
            });

        default:
            return state;
    }
}

export default data;
