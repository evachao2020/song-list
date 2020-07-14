import React, {Component} from "react";
import jsonPlaceHolder from "../../components/api/jsonPlaceHolder";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {actFetchOneUser} from "../../redux/action";

class EditUser extends Component{

    // state = {
    //     user: {}
    // }

    componentDidMount() {
        this.props.actFetchOneUser(this.props.match.params.id)
    }

    // put 把这个用户obj内容都改了，
    // patch 改这个用户都一部分
    onSubmit = formValue => {
        jsonPlaceHolder.put(`users/${this.props.id}`, formValue)
            .then()
            .catch(e => console.log(e))
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
    // if (!values.password) {
    //     errors.password = 'Required'
    // }
    return errors
}

const mapStateToProps = (state, ownProps) => {
    // const id = ownProps.match.params.id
    console.log('Edit user', state.CRUDUserReducer.oneUser)
    // const initialValues = state.CRUDUserReducer.oneUser
    return {
        id: ownProps.match.params.id,
        initialValues: state.CRUDUserReducer.oneUser,
        enableReinitialize:true,
        // user: state.CRUDUserReducer.oneUser
    }
}

const formWrap = reduxForm({
    form: 'editForm',
    validate
})(EditUser)

export default connect(mapStateToProps, {actFetchOneUser})(formWrap)
