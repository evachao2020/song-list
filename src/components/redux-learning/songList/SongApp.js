import React from "react";
import FetchSong from "./fetchSong";
import SongDetail from "./songDetail";
import {BrowserRouter, Link, Route, Router} from "react-router-dom";
import routerHistory from "../../../routerHistory";
import SingleSong from "./singleSong";
import ReduxForm from "./redux-form";
import Users from "./users";
import EditUser from "../editUser";
import NewUser from "./newUser";

const PageOne = () => {
    return (
        <div>
            <Link to='/two'>To page two</Link>
            <Link to='/songs'>To song</Link>
        </div>)
}

const PageTwo = () => {
    return <div><Link to='/'>To page one</Link>Hi Page Two</div>
}

// BrowserRouter 网页端最常见端router
// HashRouter 服务器端
// MemoryRouter app

const SongApp = () => {

    return (
        <div>
            <Router history={routerHistory}>
                <Route path='/' exact component={PageOne}></Route>
                <Route path='/two' component={PageTwo}></Route>
                <Route path='/songs' exact component={FetchSong}></Route>
                <Route path='/songs/:id' component={SingleSong}></Route>
                <Route path='/form' component={ReduxForm}></Route>
                <Route path="/user" exact component={Users}></Route>
                <Route path="/user/new" exact component={NewUser}></Route>
                <Route path="/user/edit/:id" component={EditUser}></Route>
            </Router>
            <a href="https://google.com">Google</a>
            <SongDetail></SongDetail>
        </div>
    )
}

export default SongApp