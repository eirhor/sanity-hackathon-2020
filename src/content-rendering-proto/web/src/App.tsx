import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { Category } from "./pages/Category";
import { Author } from "./pages/Author";
import { Authors } from "./pages/Authors";
import { useNavigation } from "./data/hooks/use-navigation";
import { NavigationPartial } from "./partials/NavigationPartial";
import {Menu} from 'react-foundation';
import './index.css';

const App: React.FC = () => {
  const [navigationItems] = useNavigation();

  return (
    <div className={'app'}>
      <Router>
          <Menu>
            {navigationItems
                .sort((a, b) => {
                  return a.order - b.order;
                })
                .map((n, i) => (
                    <NavigationPartial key={i} {...n} />
                ))}
          </Menu>
          <Switch>
            <Route path={`/categories/:categoryId`}>
              <Category />
            </Route>
            <Route path={"/categories"}>
              <Categories />
            </Route>
            <Route path={"/posts/:postId"}>
              <Post />
            </Route>
            <Route path={"/posts"}>
              <Posts />
            </Route>
            <Route path={"/authors/:authorId"}>
              <Author />
            </Route>
            <Route path={"/authors"}>
              <Authors />
            </Route>
            <Route path={"/"}>
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
