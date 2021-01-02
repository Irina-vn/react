import React, { Component, lazy, Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Api from "../../services/api";
// import Cast from "../Cast";
// import Reviews from "../Reviews";
import {
  ImgFilm,
  ListItem,
  WrapFilm,
  Wrap,
  InformFilm,
} from "../MovieDetailsPage/styles";

const AsyncReviews = lazy(() =>
  import("../Reviews" /*webpackChunkName: 'reviews' */)
);
const AsyncCast = lazy(() => import("../Cast" /*webpackChunkName: 'casts' */));

export default class MovieDetails extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    Api.getMovieDetails(this.props.match.params.movieId).then((movie) => {
      this.setState({ movie });
    });
  }
  handleGoBack = () => {
    console.log("bac");
    this.props.history.push({
      ...this.props.location.state,
    });
  };
  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <>
        <Wrap>
          <button type="button" onClick={this.handleGoBack}>
            Go Back
          </button>
          <br />
          {movie && (
            <>
              <WrapFilm>
                <ImgFilm
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <InformFilm>
                  <h1>
                    {movie.title} ({movie.release_date.substr(0, 4)})
                  </h1>
                  <p>User Score : {movie.vote_average * 10}%</p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h3>Genres</h3>
                  <p>
                    {movie.genres.map((genre) => (
                      <span>{genre.name} </span>
                    ))}
                  </p>
                </InformFilm>
              </WrapFilm>
              <ListItem>
                Additional informaton
                <li>
                  <Link
                    to={{
                      pathname: `${match.url}/cast`,
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `${match.url}/reviews`,
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ListItem>
            </>
          )}
          <Suspense fallback={<h3>Loading ...</h3>}>
            <Switch>
              <Route path="/movies/:movieId/cast" exact component={AsyncCast} />
              <Route
                path="/movies/:movieId/reviews"
                exact
                component={AsyncReviews}
              />
            </Switch>
          </Suspense>
        </Wrap>
      </>
    );
  }
}
