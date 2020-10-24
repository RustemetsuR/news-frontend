import axios from '../../axiosApi';
import { ADD_NEW_COMMENT_FAILURE, ADD_NEW_COMMENT_SUCCESS, CHANGE_COMMENT_INPUT_VALUE, CHANGE_NAME_COMMENT_INPUT_VALUE, DELETE_COMMENT_FAILURE, DELETE_COMMENT_SUCCESS, GET_COMMENTS_FAILURE, GET_COMMENTS_SUCCESS } from '../actionTypes';

const getCommentsSuccess = comments => {
    return { type: GET_COMMENTS_SUCCESS, comments };
};

const getCommentsFailure = error => {
    return { type: GET_COMMENTS_FAILURE, error };
};

const addCommentSuccess = () => {
    return { type: ADD_NEW_COMMENT_SUCCESS };
};

const addCommentFailure = error => {
    return { type: ADD_NEW_COMMENT_FAILURE, error };
};

export const changeName = value => {
    return { type: CHANGE_NAME_COMMENT_INPUT_VALUE, value };
};

export const changeComment = value => {
    return { type: CHANGE_COMMENT_INPUT_VALUE, value };
};

const deleteCommentSuccess = () =>{
    return {type: DELETE_COMMENT_SUCCESS};
};

const deleteCommentFailure = error =>{
    return {type: DELETE_COMMENT_FAILURE, error};
};

export const fetchGetComments = id =>{
    return async dispatch =>{
        try{
            const response = await axios.get("/comments?news_id=" + id);
            dispatch(getCommentsSuccess(response.data));
        }catch(e){
            dispatch(getCommentsFailure(e));
        };
    };
};

export const fetchAddComment = data =>{
    return async dispatch =>{
        try{
            await axios.post("/comments/", data);
            dispatch(addCommentSuccess());
        }catch(e){
            dispatchEvent(addCommentFailure(e));
        };
    };
};

export const fetchDeleteComment = id => {
    return async dispatch =>{
        try{
            await axios.delete("/comments/" + id );
            dispatch(deleteCommentSuccess());
        }catch(e){
            dispatch(deleteCommentFailure());
        };
    };
};