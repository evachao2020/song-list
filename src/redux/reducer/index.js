import {combineReducers} from "redux";
import {
    ADD, DELETE_USER, FETCH_ALL_USER, FETCH_ONE_USER,
    FETCH_ONE_WHOLE_SONG,
    FETCH_SONG,
    FETCH_USER,
    FETCH_WHOLE_SONG,
    MIN, NEW_USER,
    SELECT_SONG
} from "../../components/redux-learning/helper";
import {reducer as formReducer} from "redux-form";
import actions from "redux-form/lib/actions";

const initialState = {
    count: 0,
    fetchSong: [],
    selectSong: {},
    fetchUser: [],
    wholeSongs: [],
    wholeSong: {},
    allUser: [],
    oneUser: {}
}

// 纯函数

const calReducer = (state = initialState, action) => {
    // if (action.type === 'Add') {
    //     return state + 1
    // }  else {
    //     return state
    // }
    switch (action.type) {
        case ADD:
            return {
                ...state, count: state.count + 1
            }
        case MIN:
            return {
                ...state, count: state.count - 1
            }
        default:
            return state
    }
}
//
// const minReducer = (state = 0, action) => {
//     if (action.type === 'Min') {
//         return state - 1
//     } else {
//         return state
//     }
// }

const fetchSongReducer = (state = initialState, action) => {
    let {type, payload} = action
    if (type === FETCH_SONG) {
        return {
            ...state, fetchSong: payload.data
        }
    } else {
        return state
    }
}

const selectSongReducer = (state = initialState, action) => {
    let {type, payload} = action
    if (type === SELECT_SONG) {
        return {
            ...state, selectSong: payload
        }
    } else {
        return state
    }
}

const fetchUserReducer = (state = initialState, action) => {
    let {type, payload} = action
    if (type === FETCH_USER) {
        console.log(action.payload)
        return {
            ...state, fetchUser: payload.data
        }
    } else {
        return state
    }
}

const fetchWholeSongReducer = (state = initialState, action) => {
    let {type, payload} = action
    if (type === FETCH_WHOLE_SONG) {
        console.log(action.payload)
        return {
            ...state, wholeSongs: payload
        }
    } else {
        return state
    }
}

const fetchOneWholeSongReducer = (state = initialState, action) => {
    let {type, payload} = action
    if (type === FETCH_ONE_WHOLE_SONG) {
        console.log(action.payload)
        return {
            ...state, wholeSong: payload
        }
    } else {
        return state
    }
}

const CRUDUserReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FETCH_ALL_USER:
            return {...state, allUser: [...payload.data]}
        case FETCH_ONE_USER:
            console.log('reducer', payload.data)
            return {...state, oneUser: payload.data}
        case NEW_USER:
            return {...state, allUser: [...state.allUser, payload.data]}
        case DELETE_USER:
            return {...state, allUser: state.allUser.filter(x => x.id !== payload)}
        default:
            return state
    }
}

export default combineReducers({
    calReducer,
    fetchSongReducer,
    selectSongReducer,
    fetchUserReducer,
    fetchWholeSongReducer,
    fetchOneWholeSongReducer,
    CRUDUserReducer,
    form: formReducer
})