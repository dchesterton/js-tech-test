import React from 'react';
import PropTypes from 'prop-types';
import {List, Map} from 'immutable';

import Outcome from './Outcome';

import Loading from '../shared/Loading';
import Error from '../shared/Error';

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

        return outcomes? (
            <ul className="list-unstyled">
                {outcomes.map(outcome => <Outcome outcome={outcome} key={outcome.get('outcomeId')} />)}
            </ul>
        ): null;
    }
}

OutcomeList.propTypes = {
    market: PropTypes.instanceOf(Map).isRequired,
    outcomes: PropTypes.instanceOf(List),
    status: PropTypes.string,
    fetchMarket: PropTypes.func.isRequired,
};

export default OutcomeList;
