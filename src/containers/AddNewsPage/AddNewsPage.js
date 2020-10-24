import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeImageOfNews, changeNews, changeTitleOfNews, fetchAddNews } from '../../store/actions/newsActions';
import './AddNewsPage.css';

const AddNewsPage = props => {

    const dispatch = useDispatch();
    const title = useSelector(state => state.news.title);
    const image = useSelector(state => state.news.image);
    const news = useSelector(state => state.news.news);

    const changeTitleValue = event => {
        const value = event.target.value;
        dispatch(changeTitleOfNews(value));
    };

    const changeImageValue = event => {
        const file = event.target.files[0];
        dispatch(changeImageOfNews(file));
    };

    const changeNewsValue = event => {
        const value = event.target.value;
        dispatch(changeNews(value));
    };

    const addNews = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('news', news);

        dispatch(fetchAddNews(formData));
        props.history.replace('/');
    };

    return (
        <div className='add-news-box'>
            <h2>Add News</h2>
            <form className='add-news-form' onSubmit={addNews}>
                <input value={title} placeholder='Title' required onChange={changeTitleValue} />
                <textarea value={news} placeholder='Content' required onChange={changeNewsValue} />
                <input placeholder='Image' name='image' type='file' onChange={changeImageValue} />
                <button type='submit'>Add</button>
            </form>
        </div>

    );
};

export default AddNewsPage;