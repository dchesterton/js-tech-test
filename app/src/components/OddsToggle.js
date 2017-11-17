import React from 'react';

import {ODDS_FRACTIONAL, ODDS_DECIMAL} from '../constants';

class OddsToggle extends React.Component {
    render() {
        const {display, onChange} = this.props;

        return (
            <div className="btn-group pull-right">
                <OddsButton title="Fractional" active={display === ODDS_FRACTIONAL} onClick={onChange.bind(this, ODDS_FRACTIONAL)} />
                <OddsButton title="Decimal" active={display === ODDS_DECIMAL} onClick={onChange.bind(this, ODDS_DECIMAL)} />
            </div>
        );
    }
}

const OddsButton = ({title, active, ...props}) => {
    let classNames = 'btn btn-default';

    if (active) {
        classNames += ' active';
    }

    return <button type="button" className={classNames} {...props}>{title}</button>;
};

export default OddsToggle;
