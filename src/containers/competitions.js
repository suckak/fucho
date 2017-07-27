import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {getCompetitions} from "../actions/index"

class Competitions extends Component {

    componentDidMount(){
        console.log('start');
        this.props.getCompetitions();
    }

    render(){
        return(
            <h1>Hi</h1>
        );
    }
}

function mapStateToProps(state){
    return {state};
}

function mapDispatchToProps(dispatch){
    return {getCompetitions:bindActionCreators(getCompetitions,dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Competitions);