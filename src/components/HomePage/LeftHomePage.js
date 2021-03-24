import React from 'react';
import { Avatar } from '@material-ui/core';
import './LeftHomePage.css';
import wishlist from '../images/wishlist.svg';

function LeftHomePage() {
    return (
        <div className="left_homepage">
            
            <div>
                {/* <img src={} alt="sidebar_img" /> */}
                <Avatar /> 
            </div>

            <div className="name_desc">
                <p className="my_name">Harshit Chopra</p>
                <p className="my_desc">Web Developer at VoluntHere</p>
            </div>

            <div className="stats1">
                <p className="stats_text">Who viewed your profile</p>
                <p className="stats_no">563</p>
            </div>

            <div className="stats2">
                <p className="stats_text">Views of your post</p>
                <p className="stats_no">1,434</p>
            </div>

            <div className="access_exclusive">
                <p className="access_exclusive_access">Access exclusive tools and insights </p>
              <p className="access_exclusive_try">Try premium for 1 Month</p>
            </div>

            <div className="my_itemss">
                <img style={{width: '20px'}} src={wishlist} alt="" />
                <p className="my_items">My items</p>
            </div>

        </div>
    )
}

export default LeftHomePage;
