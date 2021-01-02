import React, { Component } from "react";
import { Link } from "react-router-dom";
import getQueryParams from "../../utils/getQueryParams";
import Searchbox from "../Searchbox";
import Api from "../../services/api";
import styled from "styled-components";

export const ListMoviesPageFilm = styled.ul`
  padding-left: 30px;
  padding-top: 30px;
`;

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = (query) => {
    Api.searchMovies(query).then((movies) => this.setState({ movies }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      //   pathname: this.props.location.pathname, // или
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />

        {movies.length > 0 && (
          <ListMoviesPageFilm>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: {
                      ...this.props.location,
                    },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ListMoviesPageFilm>
        )}
      </>
    );
  }
}
