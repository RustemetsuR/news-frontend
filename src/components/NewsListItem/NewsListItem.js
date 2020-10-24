import React from 'react';
import './NewsListItem.css';

const NewsListItem = props => {
    const time = props.dateTime.slice(0, 10);
    const date = props.dateTime.slice(11, 19);
    return (
        <div className='news-list-item-box'>
            {props.image ? <img alt={props.image} src={"http://localhost:8000/uploads/" + props.image} /> : null}
            <h3>{props.title}</h3>
            <p className='news-time-info dates'>At {time}</p>
            <p className='news-date-info dates'>{date}</p>
            <div className='btns-box'>
                <button onClick={props.clicked}>Read More</button>
                <button onClick={props.delete}>Delete</button>
            </div>

        </div>
    );
};

export default NewsListItem;