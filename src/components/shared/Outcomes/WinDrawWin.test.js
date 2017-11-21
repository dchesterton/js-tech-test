import React from 'react';
import {shallow} from 'enzyme';
import {fromJS, List} from 'immutable';

import WinDrawWin, {MissingOutcome} from './WinDrawWin';
import Outcome from './Outcome';

it('renders without crashing', () => {
    shallow(<WinDrawWin outcomes={List()} isMarketSuspended={false} />);
});

it('renders outcomes', () => {
    const isMarketSuspended = true;
    const outcome1 = fromJS({outcomeId: 1, price: {}, status: {}, type: 'home'});
    const outcome2 = fromJS({outcomeId: 2, price: {}, status: {}, type: 'away'});

    const outcomes = List([outcome1, outcome2]);

    const wrapper = shallow(<WinDrawWin outcomes={outcomes} isMarketSuspended={isMarketSuspended} />);

    expect(wrapper.find(Outcome)).toHaveLength(2);
    expect(wrapper).toContainReact(<Outcome outcome={outcome1} title="Win" suspended={isMarketSuspended} />);
    expect(wrapper).toContainReact(<Outcome outcome={outcome2} title="Win" suspended={isMarketSuspended} />);
    expect(wrapper.find(MissingOutcome)).toHaveLength(1);
    expect(wrapper).toContainReact(<MissingOutcome />);
});
