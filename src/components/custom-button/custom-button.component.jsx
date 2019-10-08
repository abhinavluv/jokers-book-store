import React from 'react';
import styles from './custom-button.module.scss';

const customButton = ({ children, ...otherProps }) => {
    return (
        <button className={styles.customButton} {...otherProps}>
            {children}
        </button>
    );
};

export default customButton;
