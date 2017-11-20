import {API_URL} from '../constants';

function requestEvents() {
    return {type: 'REQUEST_EVENTS'};
}

function receiveEvents(data) {
    return {type: 'RECEIVE_EVENTS', data};
}

function receiveEventsError() {
    return {type: 'RECEIVE_EVENTS_ERROR'};
}

function fetchEvents() {
    return dispatch => {
        dispatch(requestEvents());

        return fetch(`${API_URL}/football/live?primaryMarkets=true`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                dispatch(receiveEvents(data));
            })
            .catch(err => {
                dispatch(receiveEventsError());
            });
    }
}

function shouldFetchEvents(data) {
    return !data.fetchedAll;
}

export function fetchEventsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchEvents(getState().data)) {
            return dispatch(fetchEvents())
        } else {
            return Promise.resolve()
        }
    }
}
