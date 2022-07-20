import React from 'react'
import Loading from './UI/Loading';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/newsReducer";


const MainPage = () => {
      const news = useSelector(state => state.newsReducer.news);
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(fetchNews());
      }, [])
      return (
            (!news.length) ?
                  <Loading /> :
                  <div>main</div>
      )
}

export default MainPage