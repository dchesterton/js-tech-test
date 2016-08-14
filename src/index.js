import fixture from "../fixtures/eventData.json";
import React from "react";
import {render} from "react-dom";
import {App} from "./components/app";
const wrapper = document.getElementById('app');

render(<App {...fixture} />, wrapper);
