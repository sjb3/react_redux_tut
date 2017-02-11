'use strict';

import React, {Component} from 'react';

// const SearchBar = () =>{
//   return <input />; // React.createElement
// };

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  render(){
    // return <input onChange={this.onInputChange}/>; condensed version below
    return(
    <div className="search-bar">
      <input
        placeholder="Search"
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        />
    </div>
    )
}

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
