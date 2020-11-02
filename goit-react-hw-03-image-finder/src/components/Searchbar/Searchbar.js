import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./styles";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: "",
  };
  onSubmit = () => {};

  handlerInput = (e) => {
    // const { query } = this.state;
    this.setState({ query: e.target.value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <>
        <SearchBar>
          <SearchForm onSubmit={this.handlerSubmit}>
            <SearchFormButton type="submit">
              <span className="SearchForm-button-label">Search</span>
            </SearchFormButton>

            <SearchFormInput
              type="text"
              onChange={this.handlerInput}
              value={this.state.query}
              autocomplete="off"
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBar>
      </>
    );
  }
}
