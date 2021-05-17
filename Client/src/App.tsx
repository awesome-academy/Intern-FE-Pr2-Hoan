import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, NotFound } from "./pages";
import { Header } from "./components";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "*",
    component: NotFound,
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
