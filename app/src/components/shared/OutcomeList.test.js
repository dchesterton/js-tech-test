import React from 'react';
import {shallow} from 'enzyme';
import {Map, fromJS} from 'immutable';

import OutcomeList from './OutcomeList';
import Outcome from './Outcome';

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

    const wrapper = shallow(<OutcomeList market={Map()} fetchMarket={()=>{}} outcomes={outcomes} />);
    expect(wrapper.find(Outcome)).toHaveLength(2);
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
