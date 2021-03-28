import { Avatar } from '@material-ui/core';
import React from 'react';
import './Posts.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from './InputOption';

function Posts({ name, description, photoUrl, message }) {
    return (
        <div className="post_component">
            <div className="post_header">
                <Avatar />
                <div className="post_description">
                    <p className="post_description_name">{name}</p>
                    <p className="post_description_description">{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="#00000099" />
                <InputOption Icon={CommentOutlinedIcon} title="Comment" color="#00000099" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="#00000099" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="#00000099" />
            </div>

            <div className="post_comment">
                <Avatar />
                <input type="text" placeholder="Add a comment ..." />
            </div>
        </div>
    )
}

export default Posts;
