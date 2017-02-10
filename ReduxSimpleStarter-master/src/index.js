'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCieOvskTOPX3SJ6XMrGxWPlou_NcQzWCc';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'pilates core'},  (videos)=>{
      this.setState({videos});
      // if the key and value have same name, u can put only one of them: this.setState = {videos: videos};
    });
  }

  render(){
    return(
    <div>
      <h2>PARTY!</h2>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        {/*from parent to child*/}
        <VideoList videos={this.state.videos}/>

    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
  );
