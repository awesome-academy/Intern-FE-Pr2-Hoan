import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage, NotFoundPage, LoginPage, RegisterPage, LostPasswordPage } from "./pages";
import { Header } from "./components";

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
  const curTheme = localStorage.getItem("theme");
  if (curTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
  if (curTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
