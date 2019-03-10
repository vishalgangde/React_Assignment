import React from 'react';
import Modal from '../Modal';
const DeletePost = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete Post</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );
    
        return(

            <div>
                Delete Post
                <Modal
                title="Delete Stream"
                content="Are you sure you want to delete post?" 
                actions={actions}/>
            </div>
        );
    }


export default DeletePost;