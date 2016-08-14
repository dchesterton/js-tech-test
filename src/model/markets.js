import {head, prop, compose, ifElse, always, isNil} from "ramda";

export const firstMarketId = compose(ifElse(isNil, always(null), prop('marketId')), head);