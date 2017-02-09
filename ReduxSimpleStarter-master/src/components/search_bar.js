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
    return <input onChange={event => console.log(event.target.value)} />;
  }

}

export default SearchBar;
