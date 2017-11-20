import {connect} from 'react-redux';
import Odds from './Odds';

const mapStateToProps = ({odds}) => {
    return odds;
};

export default connect(
    mapStateToProps
)(Odds);
