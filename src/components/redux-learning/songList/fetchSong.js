import React, {Component} from "react";
import {connect} from "react-redux";
import {actFetchSong, actFetchUser, actFetchWholeSong, actSelectSong} from "../../../redux/action";
import "./song.css"
import SingerHeader from "./singerHeader";
import {Link} from "react-router-dom";
import routerHistory from "../../../routerHistory";

class FetchSong extends Component{
    constructor() {
        super();
        let test = {}
        console.log(!!test)
    }

    toPageTwo = () => {
        routerHistory.push('/two')
    }

    render() {
        return (
            <div className="songContainers">
                <Link to='/'>Home</Link>
                <button onClick={this.toPageTwo}>To page two</button>
                <div className="songBody">
                    {
                        this.props.wholeSongs.map((value, index) => {
                            return (
                                <div key={index}>
                                    <a className="button" onClick={event => this.props.actSelectSong(value)}><i className="far fa-play-circle"></i></a>
                                    <span>Song Id: {value.id}</span>
                                    <span>Song title: {value.title}, </span>
                                    <span>SingerId: {value.userId}, </span>
                                    {/*<SingerHeader userid={value.userId}></SingerHeader>*/}
                                    <span>Singer: {value.singer?.name}</span>
                                    <Link to={`/songs/${value.id}`}>View</Link>
                                    <button>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        // this.props.actFetchSong()
        // this.props.actFetchUser()
        // this.props.actFetchWholeSong()
        // axios.get('http://localhost:3001/songs')
    }
}

// middleware 中间键

const mapStateToProps = state => {
    return {
        // songs: state.fetchSongReducer.fetchSong,
        wholeSongs: state.fetchWholeSongReducer.wholeSongs
        // users: state.fetchUserReducer.fetchUser.find(e => e.id === )
    }
}

export default connect(mapStateToProps, {actFetchSong, actSelectSong, actFetchUser, actFetchWholeSong})(FetchSong)
