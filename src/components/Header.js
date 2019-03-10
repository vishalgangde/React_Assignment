import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from './user/SignIn';
//import GoogleAuth from './GoogleAuth';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
                <Link to="/" className="item">Posts</Link>
                <Link to="/posts/createpost" className="item">Create Post</Link>
                <Link to="/posts/userupdate" className="item">User Update</Link>
                <div className="right menu">
                    <button className="ui button primary">Registration</button>
                </div>
            <div className="right menu">
                <button className="ui button primary">Sign-in</button>
                
            </div>
        </div>
    );
};

export default Header;