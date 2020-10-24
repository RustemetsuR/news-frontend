const { GET_NEWS_SUCCESS, GET_NEWS_FAILURE, GET_ONE_NEWS_SUCCESS, GET_ONE_NEWS_FAILURE, CHANGE_TITLE_NEWS_INPUT_VALUE, CHANGE_NEWS_INPUT_VALUE, CHANGE_IMAGE_NEWS_INPUT_VALUE, DELETE_NEWS_SUCCESS, DELETE_NEWS_FAILURE, ADD_NEWS_SUCCESS, ADD_NEWS_FAILURE } = require("../actionTypes");

const initialState = {
    title: '',
    news: '',
    image: '',
    newsArray: [],
    oneNewsArr: [],
    error: null,
};

const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NEWS_SUCCESS:
            return {...state, newsArray: action.news};
        case GET_NEWS_FAILURE:
            return {...state, error: action.error};
        case GET_ONE_NEWS_SUCCESS:
            return {...state, oneNewsArr: action.news};
        case GET_ONE_NEWS_FAILURE:
            return {...state, error: action.error};
        case CHANGE_TITLE_NEWS_INPUT_VALUE:
            return {...state, title: action.value};
        case CHANGE_NEWS_INPUT_VALUE:
            return {...state, news: action.value};
        case CHANGE_IMAGE_NEWS_INPUT_VALUE:
            return {...state, image: action.value};
        case DELETE_NEWS_SUCCESS:
            return state;
        case DELETE_NEWS_FAILURE:
            return {...state, error: action.error};
        case ADD_NEWS_SUCCESS:
            return state;
        case ADD_NEWS_FAILURE:
            return {...state, error: action.error};
        default:
            return state
    };
};

export default newsReducer;