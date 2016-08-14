import fixture from "../fixtures/eventData.json";
import React from "react";
import {render} from "react-dom";
import {App} from "./components/app";
const wrapper = document.getElementById('app');

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

//@todo: The app looks rather bland and doesn't offer much feedback to users. Use CSS and additional components to improve the experience!
render(<App {...fixture} />, wrapper);
