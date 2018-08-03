import React, { Component } from 'react';

class search_bar extends Component {

    
    render() {
        return (
           <div style={{maxWith: '200px', margin:'0px 40% 42px 40%'}}>
                <label><h3>Search:</h3></label> <input type="text" className="form-control" onChange={this.props.fireEventToYoutube}/>
           </div>
           
        );
    }
}

export default search_bar;