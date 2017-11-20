import {connect} from 'react-redux';
import OutcomeList from './OutcomeList';
import {fetchMarket} from '../../actions/market';

const mapStateToProps = ({data}, ownProps) => {
    const marketId = ownProps.market.get('marketId');
    const outcomes = data.outcomes.get(marketId.toString());

    return {outcomes, status: data.statuses[`market_${marketId}`]};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMarket: marketId => {
            dispatch(fetchMarket(marketId));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OutcomeList)
