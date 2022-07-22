import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";

export const routes = [
      { path: '/', component: <MainPage/>, exact: true },
      {path: '/:id', component: <NewsPage/>, exact: true}
]