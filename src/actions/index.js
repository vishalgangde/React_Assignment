import posts from '../apis/posts';
import { SIGN_IN,
         REGISTER_FORM,
         POST_LIST,
         SINGLE_POST_LIST,
         CREATE_POST,
         UPDATE_POST,
         DELETE_POST
        } from './types'

        const header = {
            "Content-Type" : "application/json"
          } 

export const signIn = formValue => async (dispatch) => {
  
    const response = await posts.post('/jwt-auth/v1/token',{...formValue});
    console.log(response)
   // dispatch({ type :  , payload : response.data});
    //Do some programmatic navigation to
    //get the user back to the root route
    //history.push('/'); 
        
    };

    export const RegisterUser = formValue => async (dispatch) => {
        const response = await posts.post('/wp/v2/users/register',{...formValue});
        console.log(response);

    };

    export const createpost = formValue => async (dispatch) => {
        const response = await posts.post('/wp/v2/posts',{...formValue});
        console.log(response);
        dispatch({type: CREATE_POST, payload: response.data});
    };

    export const postList = () => async (dispatch) => {
        const response = await posts.get('/wp/v2/posts',{header:header}) ;
        console.log(response.data,"aaaa");
        dispatch({type:POST_LIST, payload : response.data});
    };
/* 
    export const SinglePostList = id => async (dispatch) => {
        const response = await posts.get(`/wp/v2/posts/${id}`);
        console.log(response);
        dispatch({type: SINGLE_POST_LISTa, payload: response.data});
    }; */

        export const UpdatePost = (id,formValue) => async (dispatch) => {
        const response = await posts.put(`/wp/v2/posts/${id}`,{...formValue});
        console.log(response);
        dispatch({type:UPDATE_POST , payload: response.data});
    };

    export const DeletePost = (id) => async (dispatch) => {
        const response = await posts.delete(`/wp/v2/posts/${id}`);
        console.log(response);
        dispatch({type:DELETE_POST, payload: id});
    };



    