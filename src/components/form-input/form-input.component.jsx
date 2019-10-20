import React from 'react';
import styles from './form-input.module.scss';

const formInput = ({ handleChange, label, ...otherInputProps }) => {
    return (
        <div className={styles.group}>
            <input
                className={styles.formInput}
                onChange={handleChange}
                {...otherInputProps}
            />
            {label ? (
                <label
                    className={`${
                        otherInputProps.value.length ? styles.shrink : ''
                    } ${styles.formInputLabel}`}>
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default formInput;
