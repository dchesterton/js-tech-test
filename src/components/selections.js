import React from "react";
import {StyleSheet, css} from "aphrodite";

export const Selection = ({ outcomeName, marketName, price }) => {
    return <div className={css(styles.selection)} key={`${outcomeName}-${marketName}`}>
        {marketName} - {outcomeName} @<b>{price.num}/{price.den}</b>
    </div>;
};

export const Selections = ({outcomes, markets, selections}) => {
    const selectedOutcomes = selections.map(id => {
        const outcome = outcomes[id];
        const market = markets[outcome.marketId];
        return {
            marketName: market.name,
            outcomeName: outcome.name,
            price: outcome.price
        };
    });

    return (
        <div>
            {selectedOutcomes.map(Selection)}
        </div>
    )
};

const styles = StyleSheet.create({
    "selection": {
        padding: "1em",
        fontFamily: "sans-serif",
        borderBottom: "1px solid #ccc"
    }
});
