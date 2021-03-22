import React from 'react';
import './Navbar.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CommentIcon from '@material-ui/icons/Comment';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AppsIcon from '@material-ui/icons/Apps';

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar_left">
                <div className="logo">
                    <LinkedInIcon color="primary" style={{ fontSize: 50 }} />
                </div>
                <div className="search_box">
                    <input type="text" placeholder="&#128269;   Search" />
                </div>
            </div>

            <div className="navbar_right">
                <p className="navbar_right_icons"><HomeIcon style={{ fontSize: 27 }} />
                    <p className="navbar_right_icons_des">Home</p>
                </p>
                <p className="navbar_right_icons"><PeopleAltIcon style={{ fontSize: 27 }} />
                    <p className="navbar_right_icons_des">My Network</p>
                </p>
                <p className="navbar_right_icons"><LocalMallIcon style={{ fontSize: 27 }} />
                    <p className="navbar_right_icons_des">Jobs</p>
                </p>
                <p className="navbar_right_icons"><CommentIcon style={{ fontSize: 27 }} />
                    <p className="navbar_right_icons_des">Messaging</p>
                </p>
                <p className="navbar_right_icons"><NotificationsRoundedIcon style={{ fontSize: 27 }} />
                    <p className="navbar_right_icons_des">Notifications</p>
                </p>
            </div>

            <div className="most_right">
                <p className="navbar_right_icons"><AppsIcon style={{ fontSize: 25 }} />
                    <span className="navbar_right_icons_des">Work &#9660;</span>
                </p>
                <p className="premium_free">Try Premium Free <br />for 1 Month</p>
                
            </div>

        </div>
    )
}

export default Navbar;
