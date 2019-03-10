import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import SignIn from './user/SignIn';
import Register from './user/Register';
import CreatePost from './posts/CreatePost';
import PostList from './posts/PostList';
import UserUpdate from './posts/UserUpdate';
import DeletePost from './posts/DeletePost';
import UpdatePost from './posts/UpdatePost';
import Header from './Header';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/user/signin' exact component={SignIn} />
                    <Route path='/user/register' exact component={Register} />
                    <Route path='/' exact component={PostList} />
                    <Route path='/posts/createpost' exact component={CreatePost} />
                    <Route path='/posts/postlist' exact component={PostList} />
                    <Route path='/posts/updatepost' exact component={UpdatePost} />
                    <Route path='/posts/userupdate' exact component={UserUpdate} />
                    <Route path="/posts/deletepost" exact component={DeletePost} />
                </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;