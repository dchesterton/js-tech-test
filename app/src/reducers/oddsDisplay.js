const oddsDisplay = (state = 'fractional', action) => {
    switch (action.type) {
        case 'TOGGLE_ODDS_DISPLAY':
            return action.display;
        default:
            return state;
    }
}

export default oddsDisplay;
