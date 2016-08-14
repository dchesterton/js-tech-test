import React, {Component} from "react";
import {StyleSheet, css} from "aphrodite";
import {prop, head, values, without, append} from "ramda";
import {Markets} from "./markets";
import {Selections} from "./selections";

/**
 * Overview
 * The application consists of two main areas - one showing markets and outcomes, the other showing selections and suggestions.
 * We have implemented a very basic list of markets and outcomes, and also a crude "betslip" that shows selections.
 *
 * Outcomes can be selected by clicking on them when displayed in the middle column (they can also be unselected
 * by clicking again)
 *
 * Markets with "Request-A-Bet" in the title consist of outcomes that are linked to standard outcomes (it's less complicated than it sounds!).
 * A Request-A-Bet outcome has a property "baseOutcomeIds" which indicates the original outcomes used to create it.
 *
 * By reducing the view of Markets to just those listed below (the RequestABet whitelist) it is possible to build a set of
 * selections which can be compared to each of the RequestABet outcomes to see if there is a matching bet.
 *
 * Relevance should be calculated by calculating the intersection of the selections set and the baseOutcomeIds for a RAB outcome.
 * This can be used to see if all selections are included. Additionally, the size of the two sets can be compared to determine
 * if there is an exact match.
 */

/**
 * @todo: Add a component that allows a customer to only show markets in the left hand panel
 * that can be used to create Request A Bet bets. The allowed Markets are:
 * 1) Full Time Result
 * 2) Both Teams To Score
 * 3) Over/Under 2.5 Goals
 * 4) To Score in 90mins
 * 5) Corners
 * 6) Bookings
 * 7) Player To Be Carded
 */
export class App extends Component {
    constructor(props) {
        super(props);
        const { markets } = props;
        this.state = {
            currentMarket: prop("marketId", head(values(markets))),
            selections: []
        }
    }

    onMarketClick(id) {
        this.setState({ currentMarket: id });
    }

    onOutcomeClick(id) {
        const {selections} = this.state;
        this.setState( {
            selections: selections.includes(id)? without([id], selections) : append(id, selections)
        });
    }

    render() {
        const { markets, outcomes } = this.props;
        return (
            <div className={css(styles.parent)}>
                <div className={css(styles.markets)}>
                    <Markets markets={markets} outcomes={outcomes} marketId={this.state.currentMarket}
                             onMarketClick={this.onMarketClick.bind(this)}
                             onOutcomeClick={this.onOutcomeClick.bind(this)}
                    />
                </div>
                <div className={css(styles.feedback)}>
                    <Selections outcomes={outcomes} markets={markets} selections={this.state.selections}/>
                    { /* @todo: Add a new component here to show suggested RequestABets based on selected outcomes*/}
                    { /* See the overview above, but the suggestions should be ordered from most relevant to least and limited to 10 outcomes */}
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    "parent": {
        display: "flex",
        flexBasis: "row",
        alignItems: "stretch",
        alignContent: "stretch",
        width: "100vw",
        height: "100vh",
        background: "#f7f7f7"
    },
    "markets": {
        width: "75%",
        flexBasis: "auto",
        borderRight: "1px solid #ccc"
    },
    "feedback": {
        width: "25%",
        flexBasis: "auto",
        minWidth: "200px"
    },
});