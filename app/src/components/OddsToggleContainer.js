import {connect} from 'react-redux';
import OddsToggle from './OddsToggle';
import {toggleDisplay} from '../actions/odds';

const mapStateToProps = ({odds}) => {
    return odds;
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: display => {
            dispatch(toggleDisplay(display));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OddsToggle)
