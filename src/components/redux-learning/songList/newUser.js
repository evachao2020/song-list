import React, {Component} from "react";
import jsonPlaceHolder from "../../api/jsonPlaceHolder";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import routerHistory from "../../../routerHistory";
import {connect} from "react-redux";
import {actCreateUser} from "../../../redux/action";

class NewUser extends Component{


    // get delete 都是有请求头 request header，没有请求体 request body
    // post put patch 既有 request header, 又有请求体 request body
    componentDidMount() {
    }

    onSubmit = formValue => {
        // jsonPlaceHolder.post('users', formValue)
        //     .then(() => {
        //         window.confirm('Create successfully')
        //         routerHistory.push('/user')
        //     })
        //     .catch(e => console.log(e))
        this.props.actCreateUser(formValue)
    }

    renderInput = ({input, label, type, meta: {touched, invalid, error}}) => {
        // console.log(field)
        return (
            <div>
                <input className={invalid && touched ? 'formInput' : ''} type={type} {...input} placeholder={label}/>
                <br/>
                {invalid && touched && <span style={{color: 'red'}}>{error}</span>}
            </div>
        )
    }

    render() {
        console.log(this.props)
        const {handleSubmit, invalid, submitSucceeded, pristine, reset} = this.props
        return (
            <div className="container">
                <Link to="/user">Users</Link>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <label>Username:</label>
                        <Field type="text" name="username" label="username" component={this.renderInput}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type="text" name="password" label="password" component={this.renderInput}/>
                    </div>
                    <input type="submit" disabled={invalid || submitSucceeded}/>
                    <button disabled={submitSucceeded || pristine} onClick={reset}>Clear Value</button>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {}
    if(!values.username) {
        errors.username = 'Username must be required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}

const formWrap = reduxForm({
    form: 'testForm',
    validate
})(NewUser)

const mapStateToProps = state => {
    return {
        user: state.CRUDUserReducer.oneUser
    }
}

export default connect(mapStateToProps, {actCreateUser})(formWrap)
