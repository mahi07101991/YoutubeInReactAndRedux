import React, { Component } from 'react';

class search_bar extends Component {

    
    render() {
        return (
            <input type="text" className="form-control" onChange={this.props.fireEventToYoutube}/>
        );
    }
}

export default search_bar;