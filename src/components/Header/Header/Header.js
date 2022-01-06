import React from 'react';
import Navigation from '../Navigation/Navigation';
import TopBanner from '../TopBanner/TopBanner';

const Header = () => {
    return (
        <div id="home" style={{ position: "sticky", top:"0", zIndex:5 }}>
            <TopBanner></TopBanner>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;