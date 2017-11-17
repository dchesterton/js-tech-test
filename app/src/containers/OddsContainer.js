import {connect} from 'react-redux';
import Odds from '../components/shared/Odds';

const mapStateToProps = state => {
    return {
        display: state.oddsDisplay
    };
};

export default connect(
    mapStateToProps
)(Odds);
