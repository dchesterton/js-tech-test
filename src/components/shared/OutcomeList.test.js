import React from 'react';
import {shallow} from 'enzyme';
import {Map, fromJS} from 'immutable';

import OutcomeList from './OutcomeList';

import Standard from './Outcomes/Standard';
import CorrectScore from './Outcomes/CorrectScore';
import WinDrawWin from './Outcomes/WinDrawWin';

import Error from '../shared/Error';
import Loading from '../shared/Loading';

it('renders without crashing', () => {
    shallow(<OutcomeList market={Map()} fetchMarket={()=>{}} />);
});

it('renders loading spinner', () => {
    const wrapper = shallow(<OutcomeList market={Map()} fetchMarket={()=>{}} status="loading" />);
    expect(wrapper.find(Loading)).toHaveLength(1);
});

it('renders error', () => {
    const wrapper = shallow(<OutcomeList market={Map()} fetchMarket={()=>{}} status="error" />);
    expect(wrapper.find(Error)).toHaveLength(1);
});

it('renders outcomes', () => {
    const outcomes = fromJS([{outcomeId: 1}, {outcomeId: 2}]);

    const status = {suspended: true};

    const standardWrapper = shallow(<OutcomeList market={fromJS({status})} fetchMarket={()=>{}} outcomes={outcomes} />);
    expect(standardWrapper.find(Standard)).toHaveLength(1);

    const correctScoreWrapper = shallow(<OutcomeList market={fromJS({status, type: 'correct-score'})} fetchMarket={()=>{}} outcomes={outcomes} />);
    expect(correctScoreWrapper.find(CorrectScore)).toHaveLength(1);

    const winDrawWinWrapper = shallow(<OutcomeList market={fromJS({status, type: 'win-draw-win'})} fetchMarket={()=>{}} outcomes={outcomes} />);
    expect(winDrawWinWrapper.find(WinDrawWin)).toHaveLength(1);
});

it('calls fetchMarket if it does not have outcomes', () => {
    const marketId = 1;
    const market = Map({marketId});

    let fetchMarketCalled = false;

    const fetchMarket = calledMarketId => {
        expect(calledMarketId).toEqual(marketId);
        fetchMarketCalled = true;
    };

    shallow(<OutcomeList market={market} fetchMarket={fetchMarket} />);

    expect(fetchMarketCalled).toEqual(true);
});
