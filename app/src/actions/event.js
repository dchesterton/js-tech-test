import {API_URL} from '../index';

function requestEvent(eventId) {
    return {
        type: 'REQUEST_EVENT',
        eventId,
    }
}

function receiveEvent(data) {
    return {
        type: 'RECEIVE_EVENT',
        data,
    };
}

function receiveEventError(eventId) {
    return {
        type: 'RECEIVE_EVENT_ERROR',
        eventId,
    };
}

function fetchEvent(eventId) {
    return dispatch => {
        dispatch(requestEvent(eventId));

        return fetch(`${API_URL}/sportsbook/event/${eventId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                dispatch(receiveEvent(data));
            })
            .catch(err => {
                dispatch(receiveEventError(eventId));
            });
    }
}

function shouldFetchEvent(data, eventId) {
    return !data.fetchedFull.includes(eventId);
}

export function fetchEventIfNeeded(eventId) {
    return (dispatch, getState) => {
        if (shouldFetchEvent(getState().data, eventId)) {
            return dispatch(fetchEvent(eventId))
        } else {
            return Promise.resolve()
        }
    }
}
