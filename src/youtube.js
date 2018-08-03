import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import DemoForm from './components/demoForm';


const YOUTUE_API_KEY = 'AIzaSyB1Z0gBfVBAvsYjuZhARm8WC9kgsalASXI';

class Youtube extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            video:null
        }
        YTSearch({key: YOUTUE_API_KEY, term: 'You are my love'}, (videos)=> {
            this.setState({videos:videos,video:videos[0]});
        })
    }

    callToYoutubeApi = (inputValue) => {
        console.log(inputValue);
        YTSearch({key: YOUTUE_API_KEY, term: inputValue}, (videos)=> {
            this.setState({videos:videos,video:videos[0]});
        })
        //console.log(this.state.videos);
    }

    render() {
        return (
            <div>
                <DemoForm />
                <SearchBar fireEventToYoutube={(event) => {this.callToYoutubeApi(event.target.value)}}/>
                <VideoDetails video={this.state.video} />
                <VideoList videos={this.state.videos} setVideo={(video) => {this.setState({video})}}/>
            </div>
        );
    }
}

export default Youtube;