import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'



export default class Auth extends Component {

    state ={ 
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Please try again.',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Your password is incorrect.',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }

            }
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid  // trim() - delete all spaces
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid        
        }
        
        return isValid
    }

    onChangeHandler = (event, controlName) => {

        const formControls = {...this.state.formControls} // copy of STATE object
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control
     
        this.setState({
            formControls
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    shouldValidate={!!control.validation} // to boolean type
                    touched={control.touched}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            )
            
        })
    }

    render() {
        const isFormValid = this.state.formControls.email.valid && this.state.formControls.password.valid

        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        { this.renderInputs() }

                        <Button 
                        type="success"
                        onClick={this.loginHandler}
                        disabled={!isFormValid}
                        >
                            Sign In
                        </Button>
                        <Button 
                        type="primary"
                        onClick={this.registerHandler}
                        disabled={!isFormValid}
                        >
                            Log In
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}