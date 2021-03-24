import React from 'react';
import './HomePage.css';
import LeftHomePage from './LeftHomePage';
import MiddleHomePage from './MiddleHomePage';
import RightHomePage from './RightHomePage';

function HomePage() {
    return (
        <div className="home">
            <div className="left_home">
                <LeftHomePage />
            </div>
            <div className="middle_home">
                <MiddleHomePage />
            </div>
            <div className="right_home">
                <RightHomePage />
            </div>
        </div>
    )
}

export default HomePage;
