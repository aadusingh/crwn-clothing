import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    handelSubmit = event => {
        event.preventdefault();

        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='Email'
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.email}
                        label='Password'
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>

                        <CustomButton type="Submit">SignIn</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            sign in with Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}
export default SignIn;