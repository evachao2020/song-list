import {
    ADD, DELETE_USER, FETCH_ALL_USER, FETCH_ONE_USER,
    FETCH_ONE_WHOLE_SONG,
    FETCH_SONG,
    FETCH_USER,
    FETCH_WHOLE_SONG,
    MIN, NEW_USER,
    SELECT_SONG
} from "../../components/redux-learning/helper";
import axios from "axios"
import jsonPlaceHolder from "../../components/api/jsonPlaceHolder";
import routerHistory from "../../routerHistory";

const url = 'https://jsonplaceholder.typicode.com/albums'

const addAct = () => {
    return {
        type: ADD  // required
    }
}

const minAct = () => {
    return {
        type: MIN  // required
    }
}

const actFetchSong = () => {
    return async (dispatch) => {
        let res = undefined
        try {
            res = await jsonPlaceHolder.get('albums')
            return dispatch ({
                type: FETCH_SONG,
                payload: res
            })
        } catch (e) {
            console.log(e)
            return
        }
    }
}

const actFetchUser = () => async dispatch => dispatch({type: FETCH_USER, payload: await jsonPlaceHolder.get('users')})

const actFetchWholeSong = () => {
    return async (dispatch) => {
        let songs = undefined
        let singers = undefined
        try {
            songs = await jsonPlaceHolder.get('albums')
        } catch (e) {
            console.log(e)
            return
        }
        try {
            singers = await jsonPlaceHolder.get('users')
        } catch (e) {
            console.log(e)
            return
        }
        let wholeSongs = songs.data.map(value => {
            console.log(value)
            return value = {
                ...value, singer: singers.data.find(e => e.id === value.userId)
            }
        })
        return dispatch ({
            type: FETCH_WHOLE_SONG,
            payload: wholeSongs
        })
    }
}

const actFetchOneWholeSong = id => {
    return async (dispatch) => {
        let song = undefined
        let singer = undefined
        try {
            song = await jsonPlaceHolder.get(`albums/${id}`)
        } catch (e) {
            console.log(e)
            return
        }
        try {
            singer = await jsonPlaceHolder.get(`users/${song.data.userId}`)
        } catch (e) {
            console.log(e)
            return
        }
        let wholeSongs = {...song.data, singer: singer.data}
        return dispatch ({
            type: FETCH_ONE_WHOLE_SONG,
            payload: wholeSongs
        })
    }
}

const actSelectSong = song => {
    return {
        type: SELECT_SONG,
        payload: song
    }
}

const actFetchAllUser = () => {
    return async (dispatch) => {
        let res = undefined
        try {
            res = await jsonPlaceHolder.get('users')
            return dispatch ({
                type: FETCH_ALL_USER,
                payload: res
            })
        } catch (e) {
            console.log(e)
            return
        }
    }
}

const actDeleteUser = id => {
    return async (dispatch) => {
        try {
            await jsonPlaceHolder.delete(`users/${id}`)
            return dispatch ({
                type: DELETE_USER,
                payload: id
            })
        } catch (e) {
            console.log(e)
            return
        }
    }
}

const actCreateUser = formValue => {
    return async dispatch => {
        try {
            let res = await jsonPlaceHolder.post('users', formValue)
            dispatch({type: NEW_USER, payload: res})
            routerHistory.push('/user')
        } catch (e) {
            console.log(e)
            return
        }
    }
}

const actFetchOneUser = id => {
    return async (dispatch) => {
        let res = undefined
        try {
            res = await jsonPlaceHolder.get(`users/${id}`)
            return dispatch ({
                type: FETCH_ONE_USER,
                payload: res
            })
        } catch (e) {
            console.log(e)
            return
        }
    }
}



export {
    addAct,
    minAct,
    actFetchSong,
    actSelectSong,
    actFetchUser,
    actFetchWholeSong,
    actFetchOneWholeSong,
    actFetchAllUser,
    actDeleteUser,
    actCreateUser,
    actFetchOneUser
}