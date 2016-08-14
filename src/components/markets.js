import React from "react";
import {values, map, head, assoc} from "ramda";
import {StyleSheet, css} from "aphrodite";

const id = f => f;

// @todo: Identify visually when a market is showing its outcomes in the middle panel
const MarketTitle = ({ name, outcomes, marketId, onClick}) => {
    const count = outcomes.length;
    const clickHandler = () => {
        onClick(marketId);
    };

    return (
        <h2 key={marketId} className={css(styles.marketTitle)} onClick={clickHandler}>
            {name} <small className={css(styles.betCount)}>({count} bets)</small>
        </h2>
    )
};

// @todo: Identify visually when an outcome is "selected"
const Outcome = ({name, price, outcomeId, onClick}) => {
    const clickHandler = () => {
        onClick(outcomeId);
    };
    return (
        <div key={outcomeId} className={css(styles.outcome)} onClick={clickHandler}>
            <div className={css(styles.outcomeName, styles.outcomeCell)}>{name}</div>
            <div className={css(styles.outcomePrice, styles.outcomeCell)}>{price.num}/{price.den}</div>
        </div>
    )
};

const pickMarketOutcomes = outcomes => market => market.outcomes.map(id => outcomes[id]);

// @todo: Order Markets by displayOrder
export const Markets = ({ markets, outcomes, marketId, onMarketClick = id, onOutcomeClick = id }) => {
    const marketList = map(MarketTitle, map(assoc("onClick", onMarketClick), values(markets)));
    const market = markets[marketId];
    const outcomeList = map(Outcome, map(assoc("onClick", onOutcomeClick), pickMarketOutcomes(outcomes)(market)));
    return (
        <div className={css(styles.panel)}>
            <div className={css(styles.markets)}>{marketList}</div>
            <div className={css(styles.outcomes)}>{outcomeList}</div>
        </div>
    )
};

const styles = StyleSheet.create({
    marketTitle: {
        fontFamily: "sans-serif",
        fontSize: "16px",
        backgroundColor: "#dedede",
        borderBottom: "1px solid #ccc",
        margin: 0,
        padding: "1em",
        cursor: "pointer",
    },
    betCount: {
        fontWeight: "bold",
        fontSize: "12px",
        color: "#777"
    },
    panel: {
        display: "flex",
        height: "100%"
    },
    markets: {
        width: "50%",
        borderRight: "1px solid #ccc",
        overflowY: "scroll"
    },
    outcomes: {
        width: "50%",
        overflowY: "scroll"
    },
    outcome: {
        width: "100%",
        display: "flex"
    },
    outcomeCell: {
        fontFamily: "sans-serif",
        padding: "1em",
        flexBasis: "auto",
        borderBottom: "1px solid #ccc",
        background: "#f3f3f3",
        cursor: "pointer"
    },
    outcomeName: {
        width: "80%",
        borderRight: "1px solid #ccc"
    },
    outcomePrice: {
        width: "20%",
        textAlign: "center"
    }
});
