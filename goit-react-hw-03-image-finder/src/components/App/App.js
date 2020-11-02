import React, { Component } from "react";
import api from "../servises/api";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

// import Spinner from "../Spinner/Spinner";
import Notification from "../Notification";
import Modal from "../Modal/Modal";
import { AppStyles } from "./styles";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    query: "",
    page: 1,
    error: null,
    largeUrl: null,
  };

  closeModal = () => {
    this.setState((state) => ({ largeUrl: null }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({
      loading: true,
    });

    api
      .get(query, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  onFormSubmit = (textInput) => {
    this.setState({
      query: textInput,
      images: [],
      page: 1,
    });
  };

  onClickImageLarge = (e) => {
    this.setState({ largeUrl: e.target.dataset.large });
  };

  render() {
    const { images, loading, error, largeUrl } = this.state;

    return (
      <>
        <AppStyles>
          <Searchbar onSubmit={this.onFormSubmit} />
          {error && (
            <Notification
              message={`Whoops, something went wrong :${error.message}`}
            />
          )}

          {images.length > 0 && (
            <ImageGallery images={images} onClickImg={this.onClickImageLarge} />
          )}

          {loading && <Loader />}
          {/* {loading && <Spinner message="Loading..." />} */}

          {images.length > 0 && !loading && (
            <Button
              type="button"
              onClick={this.fetchImages}
              onScroll={this.onScroll}
            >
              Load more
            </Button>
          )}
        </AppStyles>

        {largeUrl && <Modal imgUrl={largeUrl} onClose={this.closeModal} />}
      </>
    );
  }
}
