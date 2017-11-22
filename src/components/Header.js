import React from 'react';

import {Link} from 'react-router-dom';
import OddsToggle from './OddsToggleContainer';

const Header = ({children}) => (
    <div className="row" style={{marginTop: '20px'}}>
        <div className="col-xs-8">
            <Link to="/">
                <img src="/logo.png" alt="" />
            </Link>
            &nbsp;&nbsp;

            {children}
        </div>

        <div className="col-xs-4 text-right" style={{lineHeight: '46px'}}>
            <OddsToggle />
        </div>
    </div>
);

export default Header;
