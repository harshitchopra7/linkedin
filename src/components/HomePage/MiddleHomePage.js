import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './MiddleHomePage.css';
import './InputOption';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase';

function MiddleHomePage() {

    const [post, setPost] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('post').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setPost(
            snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('post').add({
            name: "Harshit Chopra",
            description: "Web Developer",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    };

    return (
        <div className="middle_homepage">

            <div className="middle_homepage_top">

                <div className="post">
                    <div className="post_avatar">
                        <Avatar style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="post_input">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </div>
                </div>

                <div className="input_option_items">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>

            </div>

            <p className="posts_sort">
                <hr className="posts_hr" />
                <p>Sort by:</p>
                <p className="sorting">Top &#9660;</p>
            </p>

            {post.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Posts
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default MiddleHomePage;
