import reducer from './odds';

it('sets default to fractional', () => {
    const display = 'fractional';
    const state = reducer(undefined, {type: 'OTHER'});

    expect(state).toEqual({display});
});

it('reduces display', () => {
    const display = 'decimal';
    const state = reducer({}, {type: 'TOGGLE_ODDS_DISPLAY', display})

    expect(state).toEqual({display});
});
