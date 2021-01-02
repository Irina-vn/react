import React, { Component } from "react";
import Api from "../services/api";
import styled from "styled-components";

export const ListReviews = styled.ul`
  padding-left: 30px;
  padding-top: 30px;
`;

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    Api.getMovieReviews(this.props.match.params.movieId).then((reviews) => {
      this.setState({ reviews: reviews.filter((review) => review.content) });
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 && (
          <ListReviews>
            {reviews.map((review) => (
              <li>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ListReviews>
        )}
        {/* {reviews.length < 0 && <p>We don't have any reviews for this mivie</p>} */}
      </>
    );
  }
}
