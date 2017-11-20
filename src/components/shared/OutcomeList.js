import React from 'react';
import PropTypes from 'prop-types';
import {List, Map} from 'immutable';

import Loading from '../shared/Loading';
import Error from '../shared/Error';

import CorrectScore from './Outcomes/CorrectScore';
import WinDrawWin from './Outcomes/WinDrawWin';
import Standard from './Outcomes/Standard';

class OutcomeList extends React.Component {
    componentWillMount() {
        if (!this.props.outcomes) {
            this.props.fetchMarket(this.props.market.get('marketId'));
        }
    }

    render() {
        const {outcomes, status} = this.props;

        if (status === 'loading') {
            return <Loading />;
        }

        if (status === 'error') {
            return <Error>Error loading market, please try again.</Error>;
        }

        if (!outcomes) {
            return null;
        }

        const marketType = this.props.market.get('type');

        switch (marketType) {
            case 'win-draw-win':
                return <WinDrawWin outcomes={outcomes} />;
            case 'correct-score':
                return <CorrectScore outcomes={outcomes} />;
            default:
                return <Standard outcomes={outcomes} />;
        }
    }
}

OutcomeList.propTypes = {
    market: PropTypes.instanceOf(Map).isRequired,
    outcomes: PropTypes.instanceOf(List),
    status: PropTypes.string,
    fetchMarket: PropTypes.func.isRequired,
};

export default OutcomeList;
