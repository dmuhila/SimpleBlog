import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import Blog from "./components/Blog";

const App = () => (
  <div>
    <header>
      <h1>My Blog</h1>
    </header>
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/new" component={CreateBlog} />
          <Route path="/posts/:id" component={Blog} />
        </Switch>
      </BrowserRouter>
    </main>
  </div>
);

export default App;
