//slr
//cccs
//imr
//slc
import React from 'react';
import LanguageSelector from '../LanguageSelector'
import {FormattedMessage} from 'react-intl'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="site-nav nav-padding">

            <div className="site-nav-left">
              <a><FormattedMessage id="nav.home" defaultMessage="Home" /></a>
              <a><FormattedMessage id="nav.about" defaultMessage="About Us" /></a>
              <a><FormattedMessage id="nav.contact" defaultMessage="Contact" /></a>
            </div>
            <div className="site-nav-right">
              <LanguageSelector />
            </div>
          </nav>
    );
}

export default NavBar;