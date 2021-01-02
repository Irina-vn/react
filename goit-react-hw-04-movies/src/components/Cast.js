import React, { Component } from "react";
import Api from "../services/api";

import styled from "styled-components";

export const ImgCast = styled.img`
  width: 6%;
`;
export const ListCast = styled.ul`
  padding-left: 30px;
  border-top: 1px solid gray;
  padding-top: 30px;
`;

export default class Cast extends Component {
  state = {
    casts: [],
  };

  componentDidMount() {
    Api.getMovieCredits(this.props.match.params.movieId).then((casts) => {
      this.setState({ casts: casts.filter((cast) => cast.profile_path) });
    });
  }

  render() {
    const { casts } = this.state;
    return (
      <>
        {casts.length > 0 && (
          <ListCast>
            {casts.map((cast) => (
              <li key={cast.profile_path}>
                <ImgCast
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt=""
                />
                <p>{cast.original_name}</p>
                <p>Character : {cast.character}</p>
              </li>
            ))}
          </ListCast>
        )}
      </>
    );
  }
}
