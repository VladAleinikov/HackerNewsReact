import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getStory } from '../store/newsReducer';
import Comments from '../components/UI/Comments';

const NewsPage = () => {
  const params = useParams();
  const story = useSelector(state => state.newsReducer.concretStory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStory(params.id));
  }, [])
  return (
    <div>
      <h2>{story.title}</h2>
      <a href={story.url}>Story link: {story.url}</a>
      <div className="date">Creation date: {new Date(story.time * 1000).toLocaleDateString("en-US")}</div>
      <div className="author">By: {story.by}</div>
      <div className="comments">
        <p>Num of comments {story.descendants}</p>
        <Comments commentLinks={story.kids} show={true} />
      </div>
    </div>
  )
}

export default NewsPage