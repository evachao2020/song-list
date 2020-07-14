import React from "react";
import reactDom from "react-dom"
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./redux/reducer";
import SongApp from "./components/redux-learning/songList/SongApp";
import thunk from "redux-thunk";


class Index extends React.Component{
    // store 两个常用的函数 getState，subscribe, dispatch
    render() {
        return (
            <div>
                {/*<ShowEx/>*/}
                {/*<WeatherApp></WeatherApp>*/}
                {/*<GoogleOAuth></GoogleOAuth>*/}
                {/*<Calculate></Calculate>*/}
                <SongApp/>
            </div>
        );
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// store.subscribe(x => {
//     console.log(store.getState())
// })

reactDom.render(
    <Provider store={store}>
        <Index></Index>
    </Provider>, document.getElementById('root'))

// react 不方便的地方 1、代码结构，2、组件之间的通信不方便。
// 2014 facebook提出 flux 架构。 2015年，fb 将flux与函数式编程结合在一起，redux ，ngrx

// 1. 用户的使用方式非常简单， 2、 用户之间没有协作， 3、不需要与服务器大量交互 不需要使用redux
// 1、用户使用方式复杂，2、多个用户之间协作， 3、与服务器大量交互，建议使用redux
