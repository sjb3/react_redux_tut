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

    this.state = {
      videos: [],
      selectedVideo: null,
  };
    this.videoSearch('yoga');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term},  (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // if the key and value have same name, u can put only one of them: this.setState = {videos: videos};
    });

  }

  render(){
    return(
    <div className="index-div">

        <h1 className="yoga-title">Search YouTube!</h1>
        <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />

        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>

    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
  );
