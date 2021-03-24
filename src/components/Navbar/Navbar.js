import React from 'react';
import './Navbar.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CommentIcon from '@material-ui/icons/Comment';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import harshit from '../images/harshit.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));

function Navbar() {

    const classes = useStyles();

    return (
        <div className="navbar">

            <div className="navbar_left">
                <div className="logo">
                    <LinkedInIcon color="primary" style={{ fontSize: 50 }} />
                </div>
                <div className="search_box">
                    <SearchIcon className="search_icon" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="navbar_right">
                <p className="navbar_right_icons"><HomeIcon style={{ fontSize: 28 }} />
                    <p className="navbar_right_icons_des">Home</p>
                </p>
                <p className="navbar_right_icons"><PeopleAltIcon style={{ fontSize: 28 }} />
                    <p className="navbar_right_icons_des">My Network</p>
                </p>
                <p className="navbar_right_icons"><LocalMallIcon style={{ fontSize: 28 }} />
                    <p className="navbar_right_icons_des">Jobs</p>
                </p>
                <p className="navbar_right_icons"><CommentIcon style={{ fontSize: 28 }} />
                    <p className="navbar_right_icons_des">Messaging</p>
                </p>
                <p className="navbar_right_icons"><NotificationsRoundedIcon style={{ fontSize: 28 }} />
                    <p className="navbar_right_icons_des">Notifications</p>
                </p>
                <p className="navbar_right_icons"><Avatar src={harshit} className={classes.small} />
                    <span className="navbar_right_icons_des avatar">Home &#9660;</span>
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
