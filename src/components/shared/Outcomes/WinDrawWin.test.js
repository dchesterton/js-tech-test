import React from 'react';
import {shallow} from 'enzyme';
import {fromJS, List} from 'immutable';

import WinDrawWin from './WinDrawWin';
import Outcome from './Outcome';

it('renders without crashing', () => {
    shallow(<WinDrawWin outcomes={List()} isMarketSuspended={false} />);
});

it('renders outcomes', () => {
    const isMarketSuspended = true;
    const outcome1 = fromJS({outcomeId: 1, price: {}, status: {}, type: 'home'});
    const outcome2 = fromJS({outcomeId: 2, price: {}, status: {}, type: 'away'});
    const outcome3 = fromJS({outcomeId: 3, price: {}, status: {}, type: 'away'});
    const outcome4 = fromJS({outcomeId: 4, price: {}, status: {}, type: 'draw'});

    const outcomes = List([outcome1, outcome2, outcome3, outcome4]);

    const wrapper = shallow(<WinDrawWin outcomes={outcomes} isMarketSuspended={isMarketSuspended} />);

    expect(wrapper.find(Outcome)).toHaveLength(4);
    expect(wrapper).toContainReact(<Outcome outcome={outcome1} title="Win" suspended={isMarketSuspended} />);
    expect(wrapper).toContainReact(<Outcome outcome={outcome2} title="Win" suspended={isMarketSuspended} />);
    expect(wrapper).toContainReact(<Outcome outcome={outcome3} title="Win" suspended={isMarketSuspended} />);
    expect(wrapper).toContainReact(<Outcome outcome={outcome4} title="Draw" suspended={isMarketSuspended} />);
});
