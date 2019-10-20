import React from 'react';
import styles from './custom-button.module.scss';

const customButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button
            className={`${isGoogleSignIn ? styles.googleSignIn : ''} ${
                styles.customButton
            }`}
            {...otherProps}>
            {children}
        </button>
    );
};

export default customButton;
