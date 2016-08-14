import describe from "tape";
import {firstMarketId} from "../../src/model/markets";
import {prop, values, sortBy, head} from "ramda";
import fixture from "../../fixtures/eventData.json";

describe("#firstMarketId", ({test: it}) => {
    it("returns the first id if markets provided", assert => {
        assert.plan(1);

        const markets = values(fixture.markets);
        const expected = head(markets).marketId;
        const actual = firstMarketId(markets);

        assert.equal(actual, expected, "Given a list of markets, returns the id of the first");
    });

    it("returns null if list is empty", assert => {
        assert.plan(1);

        const markets = [];
        const expected = null;
        const actual = firstMarketId(markets);

        assert.equal(actual, expected, "Returns null for empty lists");
    })
});