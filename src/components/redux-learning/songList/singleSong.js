import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actFetchOneWholeSong} from "../../../redux/action";

class SingleSong extends Component{
    render() {
        console.log(this.props.wholeSong)
        // const {id, title, singer} = this.props.wholeSong
        return (
            <div>
                Hi Single Song, {this.props.wholeSong?.id} : {this.props.wholeSong?.title} : {this.props.wholeSong?.singer?.name}
                <Link to="/songs">To songs</Link>
            </div>
        );
    }

    componentDidMount() {
        this.props.actFetchOneWholeSong(this.props.id)
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match)
    const id = ownProps.match.params.id
    return {
        id,
        // wholeSong: state.fetchWholeSongReducer.wholeSongs.find(e => e.id === parseInt(id))
        wholeSong: state.fetchOneWholeSongReducer.wholeSong
    }
}

export default connect(mapStateToProps, {actFetchOneWholeSong})(SingleSong)
