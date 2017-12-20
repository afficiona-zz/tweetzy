import React, { Component } from 'react';

/**
 * SearchForm is a component to handle search form submission
 */
class SearchForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchTweets(this.searchInput.value);
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Hashtag search..." ref={(input) => {this.searchInput = input;}}/>
        <button className="btn" type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
