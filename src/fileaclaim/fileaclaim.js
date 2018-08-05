import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actionCreators from './actioncreator';
import { bindActionCreators } from 'redux';
import ConfigPage from './configpage';
import StepOne from './pages/step1';
import StepTwo from './pages/step2';

class fileaclaim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageState: 'step1'
        }
    }
    componentDidMount() {
        var temp = import(`./pages/${this.state.pageState}`).default;
        debugger;
        console.log(temp);
    }
    goToPage = () => {
        debugger;
        this.props.actions.setComponent(this.state.pageState);
    }

    render() {
        debugger;
        return (
            
            <div>
                <Link to="/fileaclaim/stepone">Mahesh</Link>
                <Route path="/fileaclaim/:id" component={this.state.pageState} />
                <button className="btn btn-primary" onClick={()=> {this.goToPage()}}>Mahesh</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        page: state.fileaclaim.pageState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fileaclaim);