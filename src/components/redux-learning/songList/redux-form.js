import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import "./form-test.css"

class ReduxForm extends Component{

    onSubmit = formValue => {
        console.log(formValue)
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
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <label>Username:</label>
                        <Field type="text" name="username" label="username" component={this.renderInput}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type="text" name="password" label="password" component={this.renderInput}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="text" name="email" label="password" component={this.renderInput}/>
                    </div>
                    <div>
                        <label>Country:</label>
                        <Field name="country" component="select">
                            <option value="china">China</option>
                            <option value="canada">Canada</option>
                        </Field>
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
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}

export default reduxForm({
    form: 'testForm',
    validate
})(ReduxForm)
