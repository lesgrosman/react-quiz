import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

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

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target)
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (

                <Input
                    key={controlName + index}
                    type={control.type}
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
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        { this.renderInputs() }

                        <Button 
                        type="success"
                        onClick={this.loginHandler}
                        >
                            Sign In
                        </Button>
                        <Button 
                        type="primary"
                        onClick={this.registerHandler}
                        >
                            Log In
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}