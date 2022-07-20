import MainPage from "../components/MainPage";
import NewsPage from "../components/NewsPage";

export const routes = [
      { path: '/', component: <MainPage/>, exact: true },
      {path: '/:id', component: <NewsPage/>, exact: true}
]