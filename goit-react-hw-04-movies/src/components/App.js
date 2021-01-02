import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" exast component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}
