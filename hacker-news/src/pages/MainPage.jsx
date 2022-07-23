import React from 'react'
import Loading from '../components/UI/Loading';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setNews } from "../redux/store/newsReducer";
import Post from '../components/Post';
import MyButton from '../components/UI/MyButton';


const MainPage = () => {
      const news = useSelector(state => state.newsReducer.news);
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(fetchNews());
            setInterval(() => {
                  dispatch(fetchNews());
            }, 60000);
      }, [])

      return (
            <div className="main-container">
                  {(!news.length) ?
                        <Loading /> :
                        <div className="main">

                              <MyButton onClick={(e) => {
                                    dispatch(setNews({}));
                                    dispatch(fetchNews())
                              }} className='reload-btn'>
                                    <span class="material-symbols-outlined">
                                          settings_backup_restore
                                    </span>
                                    Reload</MyButton>
                              {news.map(post =>
                                    <Post title={post.title}
                                          author={post.by}
                                          score={post.score}
                                          date={new Date(post.time * 1000).toLocaleDateString("en-US")}
                                          id={post.id} />)}
                        </div>}
            </div>
      )
}

export default MainPage