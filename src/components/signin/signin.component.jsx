import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import styles from './signin.module.scss';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className={styles.SignIn}>
                <h2>I already have an account</h2>
                <span>Sign In With your Email &amp; Password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;