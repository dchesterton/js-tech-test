export const toggleDisplay = display => {
    return {
        type: 'TOGGLE_ODDS_DISPLAY',
        display
    }
}

export const ODDS_FRACTIONAL = 'fractional';
export const ODDS_DECIMAL = 'decimal';
