import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  NotFoundPage,
  LoginPage,
  RegisterPage,
  LostPasswordPage,
} from "./pages";
import { Header, Footer, ButtonScrollToTop } from "./components";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { HANDLE_SCROLL } from "./redux/actionTypes";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/lost-password",
    component: LostPasswordPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

function App() {
  const dispatch = useDispatch();
  const curPageYOffset: number = useSelector(
    (state: RootStateOrAny) => state.scroll.curOffsetTop
  );
  const [isShowButtonScroolToTop, setIsShowButtonScroolToTop] = useState(false);
  const curTheme = localStorage.getItem("theme");
  if (curTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
  if (curTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  useEffect(() => {
    window.onscroll = () => {
      dispatch({ type: HANDLE_SCROLL, pageYOffset: window.pageYOffset });
    };
  }, []);
  useEffect(() => {
    curPageYOffset > 90
      ? setIsShowButtonScroolToTop(true)
      : setIsShowButtonScroolToTop(false);
  }, [curPageYOffset]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
        <Footer />
        <ButtonScrollToTop isShow={isShowButtonScroolToTop} />
      </Router>
    </div>
  );
}

export default App;
