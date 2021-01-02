import React, { Component } from "react";
import { Link } from "react-router-dom";
import getQueryParams from "../../utils/getQueryParams";
import Api from "../../services/api";
import styled from "styled-components";

export const ListHomePageFilm = styled.ul`
  padding-left: 30px;
  padding-top: 30px;
`;

export default class HomePage extends Component {
  state = {
    films: [],
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    Api.getTrending(query).then((films) => this.setState({ films }));
  }

  render() {
    const { films } = this.state;
    const { match } = this.props;

    return (
      <>
        {films.length > 0 && (
          <ListHomePageFilm>
            {films.map((film) => (
              <li key={film.id}>
                <Link
                  to={{
                    pathname: `${match.url}movies/${film.id}`,
                    state: {
                      ...this.props.location,
                    },
                  }}
                >
                  {film.title}
                </Link>
              </li>
            ))}
          </ListHomePageFilm>
        )}
      </>
    );
  }
}
