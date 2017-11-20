const odds = (state = {display: 'fractional'}, action) => {
    switch (action.type) {
        case 'TOGGLE_ODDS_DISPLAY':
            return {display: action.display};
        default:
            return state;
    }
}

export default odds;
