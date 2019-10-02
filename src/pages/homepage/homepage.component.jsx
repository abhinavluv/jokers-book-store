import React from 'react';
import Directory from '../../components/directory/directory.component';
import styles from './homepage.module.scss';

const homepage = (props) => {
    return (
        <div className={styles.homePage}>
            <Directory />
        </div>
    )
};

export default homepage;
