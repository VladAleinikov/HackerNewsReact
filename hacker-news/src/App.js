import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./store/newsReducer";




function App() {

  const news = useSelector(state => state.newsReducer.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [])

  console.log(news);
  return (
    <div className="App">

    </div>
  );
}

export default App;
