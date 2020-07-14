import React, {Component} from "react";
import {connect} from "react-redux";
import './song.css'

class SongDetail extends Component{
    render() {
        const {song} = this.props
        if (!song.id) {
            return <div className="songTitle">Please subscribe the music first</div>
        }
        console.log(song)
        return (
            <div>
                <div>
                    <marquee behavior="scroll" direction="">{song.id}: Title: {song.title}, Singer: {song.singer.name}</marquee>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        song: state.selectSongReducer.selectSong,
        // user: state.fetchUserReducer.fetchUser.find(e => e.id === state.selectSongReducer.selectSong.userId)
    }
}

export default connect(mapStateToProps)(SongDetail)
