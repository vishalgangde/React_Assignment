import React from 'react';
import { connect } from 'react-redux';
import { postList } from '../../actions/'
import { Link } from 'react-router-dom';

class PostList extends React.Component{
    componentWillMount(){
        console.log("aa")
        this.props.postList();
    }

    renderPostList(){
        return this.props.posts.map(post => {
            return(
                <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                <Link to={`/posts/postview/${post.id}`} className="header">
                {post.title.rendered}
                </Link>
                <div className="description">{post.description.rendered}</div>
                </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h2>All Post List</h2>
                <div className="ui celled list">{this.renderPostList()}</div>   
            </div>
        ); 
    }
}

const mapStateToProps = ({posts}) => {
    //console.log(posts);
    
    return { 
        posts : Object.values(posts)
    }
}

export default connect(mapStateToProps, {postList})(PostList);