import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeComment, changeName, fetchAddComment, fetchDeleteComment, fetchGetComments } from '../../../store/actions/commentsActions';
import './OneNewsPage.css';

const OneNewsPage = () => {

    const dispatch = useDispatch();
    const oneNewsArr = useSelector(state => state.news.oneNewsArr);
    const commentsArr = useSelector(state => state.comments.commentsArray);

    const name = useSelector(state => state.comments.name);
    const comment = useSelector(state => state.comments.comment);

    useEffect(() => {
        dispatch(fetchGetComments(oneNewsArr.id));
    }, [dispatch, oneNewsArr.id, commentsArr]);

    const deleteComment = id => {
        dispatch(fetchDeleteComment(id));
    };

    const addComment = event => {
        event.preventDefault();
        const data = {
            author: name,
            comment,
            news_id: oneNewsArr.id,
        };
        dispatch(fetchAddComment(data));
    };

    const changeAuthorInput = event => {
        const value = event.target.value;
        dispatch(changeName(value));
    };

    const changeCommentInput = event => {
        const value = event.target.value;
        dispatch(changeComment(value));
    };


    return (
        <div>
            <div className='news-section'>
                {oneNewsArr.image ? <img className='one-news-image' alt={oneNewsArr.image} src={"http://localhost:8000/uploads/" + oneNewsArr.image} /> : null}
                <h2>{oneNewsArr.title}</h2>
                <p>{oneNewsArr.news}</p>
            </div>

            <div className='comments-section'>
                <h4>Comments</h4>
                {commentsArr.length > 0 ? commentsArr.map(c => {
                    return <div className='comment-box' key={c.id}>
                        <h3>{c.author}</h3>
                        <p>{c.comment}</p>
                        <button onClick={() => deleteComment(c.id)}>Delete</button>
                    </div>
                }) : null}
            </div>

            <form className='addCommentForm' onSubmit={addComment}>
                <input onChange={changeAuthorInput} value={name} placeholder='Author' />
                <input onChange={changeCommentInput} required value={comment} placeholder='Comments' />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default OneNewsPage;