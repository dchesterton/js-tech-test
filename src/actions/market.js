import {API_URL} from '../constants';

function requestMarket(marketId) {
    return {type: 'REQUEST_MARKET', marketId};
}

function receiveMarket(data) {
    return {type: 'RECEIVE_MARKET', data};
}

function receiveMarketError(marketId) {
    return {type: 'RECEIVE_MARKET_ERROR', marketId};
}

export function fetchMarket(marketId) {
    return dispatch => {
        dispatch(requestMarket(marketId));

        return fetch(`${API_URL}/sportsbook/market/${marketId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                dispatch(receiveMarket(data));
            })
            .catch(err => {
                dispatch(receiveMarketError(marketId));
            });
    }
}
