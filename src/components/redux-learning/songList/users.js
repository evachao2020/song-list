import React, {Component} from "react";
import axios from "axios"
import jsonPlaceHolder from "../../api/jsonPlaceHolder";
import "./song.css"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actDeleteUser, actFetchAllUser} from "../../../redux/action";

class Users extends Component{
    // state = {
    //     users: []
    // }

    // usersArr = []

    componentDidMount() {
        // jsonPlaceHolder.get('users')
        //         //     .then(res => {
        //         //         this.setState({users: res.data})
        //         //         this.usersArr = [...res.data]
        //         //     })
        //         //     .catch(e => console.log(e))
        this.props.actFetchAllUser()
    }

    onDelete = id => {
        // jsonPlaceHolder.delete(`users/${id}`)
        //         //     .then(() => {
        //         //         this.usersArr = this.usersArr.filter(x => x.id !== id)
        //         //         this.setState({users: this.usersArr})
        //         //     })
        //         //     .catch(e => console.log(e))
        this.props.actDeleteUser(id)
    }

    renderUser = () => {
        return this.props.users.map((value, index) => {
            return (
                <ul className="listUser" key={index}>
                    <li className="listUserLi">{value?.id}</li>
                    <li className="listUserLi">{value?.username}</li>
                    <li className="listUserLi">{value?.password}</li>
                    <button onClick={event => this.onDelete(value.id)}>X</button>
                    <Link to={`user/edit/${value.id}`}>View</Link>
                </ul>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <Link to="user/new">New User</Link>
                <ul className="listUser">
                    <li className="listUserLi">User Id</li>
                    <li className="listUserLi">User Name</li>
                    <li className="listUserLi">User Password</li>
                </ul>

                {this.renderUser()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.CRUDUserReducer.allUser
    }
}

export default connect(mapStateToProps, {actFetchAllUser, actDeleteUser})(Users)

