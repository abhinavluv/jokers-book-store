import React from 'react';
import SignIn from '../../components/signin/signin.component';
import styles from './sign-in-sign-up.module.scss';

const signInSignUp = () => {
    return (
        <div className={styles.signInSignUp}>
            <SignIn />
        </div>
    );
};

export default signInSignUp;
