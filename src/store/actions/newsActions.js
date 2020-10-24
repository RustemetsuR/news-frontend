import axios from '../../axiosApi';
import { ADD_NEWS_FAILURE, ADD_NEWS_SUCCESS, CHANGE_IMAGE_NEWS_INPUT_VALUE, CHANGE_NEWS_INPUT_VALUE, CHANGE_TITLE_NEWS_INPUT_VALUE, DELETE_NEWS_FAILURE, DELETE_NEWS_SUCCESS, GET_COMMENTS_FAILURE, GET_NEWS_SUCCESS, GET_ONE_NEWS_FAILURE, GET_ONE_NEWS_SUCCESS } from '../actionTypes';

const getAllNewsSuccess = news => {
    return { type: GET_NEWS_SUCCESS, news };
};

const getAllNewsFailure = error => {
    return { type: GET_COMMENTS_FAILURE, error };
};

const getOneNewsSuccess = news => {
    return { type: GET_ONE_NEWS_SUCCESS, news };
};

const getOneNewsFailure = error => {
    return { type: GET_ONE_NEWS_FAILURE, error };
};

export const changeTitleOfNews = value => {
    return { type: CHANGE_TITLE_NEWS_INPUT_VALUE, value };
};

export const changeImageOfNews = value => {
    return { type: CHANGE_IMAGE_NEWS_INPUT_VALUE, value };
};

export const changeNews = value => {
    return { type: CHANGE_NEWS_INPUT_VALUE, value };
};

const addNewsSuccess = () => {
    return { type: ADD_NEWS_SUCCESS };
};

const addNewsFailure = error => {
    return { type: ADD_NEWS_FAILURE, error };
};

const deleteNewsSuccess = () => {
    return { type: DELETE_NEWS_SUCCESS };
};

const deleteNewsFailure = error => {
    return { type: DELETE_NEWS_FAILURE, error };
};

export const fetchGetAllNews = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/news');
            dispatch(getAllNewsSuccess(response.data))
        } catch (e) {
            dispatch(getAllNewsFailure(e));
        };
    };
};

export const fetchGetOneNews = id => {
    return async dispatch => {
        try {
            const response = await axios.get("/news/" + id);
            dispatch(getOneNewsSuccess(response.data));
        } catch (e) {
            dispatch(getOneNewsFailure(e));
        };
    };
};

export const fetchAddNews = data => {
    return async dispatch => {
        try {
            await axios.post("/news/", data);
            dispatch(addNewsSuccess())
        } catch (e) {
            dispatch(addNewsFailure(e));
        };
    };
};

export const fetchDeleteNews = id =>{
    return async dispatch =>{
        try{
            await axios.delete("/news/" + id);
            dispatch(deleteNewsSuccess());
        }catch(e){
            dispatch(deleteNewsFailure(e));
        };
    };
};
