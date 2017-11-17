import { connect } from 'react-redux';
import OddsToggle from '../components/OddsToggle';

const mapStateToProps = state => {
    return {
        display: state.oddsDisplay
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: display => dispatch({
            type : 'TOGGLE_ODDS_DISPLAY',
            display,
        })
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OddsToggle)
