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
    <div>
      <input
        value = {this.state.term}
        onChange={event => this.setState({term: event.target.value})}
        />
    </div>
    )
}

}

export default SearchBar;
