import React from 'react';
import {shallow} from 'enzyme';
import {fromJS, List} from 'immutable';

import CorrectScore from './CorrectScore';
import Outcome from './Outcome';

it('renders without crashing', () => {
    shallow(<CorrectScore outcomes={List()} isMarketSuspended={false} />);
});

it('renders outcomes', () => {
    const isMarketSuspended = true;
    const outcome1 = fromJS({outcomeId: 1, price: {}, status: {}, type: 'home', score: {home: 1, away: 0}});
    const outcome2 = fromJS({outcomeId: 2, price: {}, status: {}, type: 'away', score: {home: 1, away: 2}});
    const outcome3 = fromJS({outcomeId: 3, price: {}, status: {}, type: 'away', score: {home: 3, away: 4}});
    const outcome4 = fromJS({outcomeId: 4, price: {}, status: {}, type: 'draw', score: {home: 2, away: 2}});

    const outcomes = List([outcome1, outcome2, outcome3, outcome4]);

    const wrapper = shallow(<CorrectScore outcomes={outcomes} isMarketSuspended={isMarketSuspended} />);

    const homeColumn = wrapper.find('.col-xs-4').at(0);
    const drawColumn = wrapper.find('.col-xs-4').at(1);
    const awayColumn = wrapper.find('.col-xs-4').at(2);

    expect(wrapper.find(Outcome)).toHaveLength(4);
    expect(homeColumn).toContainReact(<Outcome outcome={outcome1} title="1-0" suspended={isMarketSuspended} />);
    expect(awayColumn).toContainReact(<Outcome outcome={outcome2} title="1-2" suspended={isMarketSuspended} />);
    expect(awayColumn).toContainReact(<Outcome outcome={outcome3} title="3-4" suspended={isMarketSuspended} />);
    expect(drawColumn).toContainReact(<Outcome outcome={outcome4} title="2-2" suspended={isMarketSuspended} />);
});
