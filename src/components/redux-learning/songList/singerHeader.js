import React, {Component} from "react";
import {connect} from "react-redux";

class SingerHeader extends Component{
    render() {
        return (
            <div>
                {this.props.user?.name}
            </div>
        );
    }
}

// ownProps optional , 原生react 父传子的那个props

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.fetchUserReducer.fetchUser.find(e => e.id === ownProps.userid)
    }
}

export default connect(mapStateToProps)(SingerHeader)
