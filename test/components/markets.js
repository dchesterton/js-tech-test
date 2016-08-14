import describe from "tape";
import React from "react";
import {StyleSheetTestUtils} from "aphrodite";
import {MarketList} from "../../src/components/markets";
import fixture from "../../fixtures/eventData.json";
import {values, clone, head} from "ramda";
import {shallow} from "enzyme";

describe("<MarketList/>", ({test: it}) => {
    it("renders a MarketTitle per market", assert => {
        assert.plan(1);

        StyleSheetTestUtils.suppressStyleInjection();

        const markets = clone(fixture.markets);
        const wrapper = shallow(<MarketList markets={markets} onMarketClick={f => f} />);
        const expected = values(markets).length;
        const actual = wrapper.children().length;

        assert.equal(actual, expected, "renders a MarketTitle component per market");

        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
});