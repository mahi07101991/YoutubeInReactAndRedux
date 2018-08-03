import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import {reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Youtube from './youtube';
import FileAClaim from './fileaclaim/fileaclaim';
import Navigation from './navigation';
import Home from './home';

const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
        return (
            <div>
                <Navigation />
                <Provider store={store}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/youtube" component={Youtube}/>
                        <Route path="/fileaclaim" component={FileAClaim}/>
                    </Switch>
                </Provider>    
            </div>
        )
}

ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
