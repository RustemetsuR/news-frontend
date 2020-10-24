import {
    ADD_NEW_COMMENT_FAILURE,
    ADD_NEW_COMMENT_SUCCESS,
    CHANGE_COMMENT_INPUT_VALUE,
    CHANGE_NAME_COMMENT_INPUT_VALUE,
    DELETE_COMMENT_FAILURE,
    DELETE_COMMENT_SUCCESS,
    GET_COMMENTS_FAILURE,
    GET_COMMENTS_SUCCESS
} from "../actionTypes";

const initialState = {
    commentsArray: [],
    name: '',
    comment: '',
    error: null
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_SUCCESS:
            return { ...state, commentsArray: action.comments };
        case GET_COMMENTS_FAILURE:
            return { ...state, error: action.error };
        case CHANGE_NAME_COMMENT_INPUT_VALUE:
            return { ...state, name: action.value };
        case CHANGE_COMMENT_INPUT_VALUE:
            return { ...state, comment: action.value };
        case ADD_NEW_COMMENT_SUCCESS:
            return state;
        case ADD_NEW_COMMENT_FAILURE:
            return { ...state, error: action.error };
        case DELETE_COMMENT_SUCCESS:
            return state;
        case DELETE_COMMENT_FAILURE:
            return {...state, error: action.error}
        default:
            return state
    };
};

export default commentsReducer;