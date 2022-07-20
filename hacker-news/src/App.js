import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./store/newsReducer";
import { BrowserRouter, Route } from 'react-router-dom';
import AppRouter from "./components/AppRouter";



function App() {

  const news = useSelector(state => state.newsReducer.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [])

  console.log(news);
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    
  );
}

export default App;
