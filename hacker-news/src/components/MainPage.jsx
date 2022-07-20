import React from 'react'
import Loading from './UI/Loading';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/newsReducer";
import Post from './Post';


const MainPage = () => {
      const news = useSelector(state => state.newsReducer.news);
      const dispatch = useDispatch();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      useEffect(() => {
            dispatch(fetchNews());
      }, [])

      return (
            (!news.length) ?
                  <Loading /> :
                  news.map(post =>
                        <Post title={post.title}
                              author={post.by}
                              score={post.score}
                              date={new Date(post.time).toLocaleDateString("en-US")}
                              id={post.id} />)
      )
}

export default MainPage