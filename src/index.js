import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import DemoForm from './components/demoForm';
import { createStore, combineReducers } from 'redux'
import {reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

const YOUTUE_API_KEY = 'AIzaSyB1Z0gBfVBAvsYjuZhARm8WC9kgsalASXI';

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
  })

const store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
    constructor(props) {
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
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
