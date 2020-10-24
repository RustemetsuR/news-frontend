import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NewsListItem from '../../components/NewsListItem/NewsListItem';
import { fetchDeleteNews, fetchGetAllNews, fetchGetOneNews } from '../../store/actions/newsActions';
import './NewsPage.css';
const NewsPage = props => {

    const dispatch = useDispatch();

    const newsArr = useSelector(state => state.news.newsArray);

    useEffect(() => {
        dispatch(fetchGetAllNews());
    }, [newsArr, dispatch]);

    const changeOneNews = id => {
        dispatch(fetchGetOneNews(id));
        props.history.push('/oneNews/');
    };

    const deleteNews = id => {
        dispatch(fetchDeleteNews(id))
    }

    const newsList = newsArr.map(news => {
        return <NewsListItem
            key={news.id}
            title={news.title}
            dateTime={news.dateTime}
            image={news.image}
            clicked={() => changeOneNews(news.id)}
            delete={() => deleteNews(news.id)} />
    });

    return (
        <div>
            <div className='news-box'>
                <h2>News</h2>
                <NavLink to='/addNews'>Add News</NavLink>
                <div className='news-list-box'>
                    {newsList}
                </div>
                
            </div>
        </div>
    );
};

export default NewsPage;