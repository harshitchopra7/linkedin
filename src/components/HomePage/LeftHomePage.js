import React from 'react';
import { Avatar } from '@material-ui/core';
import './LeftHomePage.css';
import wishlist from '../images/wishlist.svg';

function LeftHomePage() {

    const recentItem = (topic) => (
        <div className="topic_line">
            <span className="topic_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div>
            <div className="left_homepage">

                <div className="status_img">
                    <img src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8184.jpg?size=626&ext=jpg" alt="" />
                    <Avatar style={{ width: "70px", height: "70px" }} />
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
                    <img style={{ width: '20px' }} src={wishlist} alt="" />
                    <p className="my_items">My items</p>
                </div>



            </div>
            <div className="sidebar_bottom">
                <div className="recent_item">
                    <p>Recent</p>
                    {recentItem('career')}
                    {recentItem('hiring')}
                    {recentItem('web development')}
                </div>
                <div className="group_event">
                    <p>Groups</p>
                    <p>Events</p>
                </div>
                <div className="followed_hash">
                    <p>Followed Hashtags</p>
                    {recentItem('career')}
                    {recentItem('hiring')}
                    {recentItem('web development')}
                    {recentItem('recruitment')}
                    {recentItem('india')}
                </div>
            </div>
            <div className="discover_more">
                <p>Discover More</p>
            </div>
        </div>
    )
}

export default LeftHomePage;
