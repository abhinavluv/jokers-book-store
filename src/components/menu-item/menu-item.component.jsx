import React from 'react';
import styles from './menu-item.module.scss';

const menuItem = ({ title, imageURL, size }) => {
    return (
        <div className={`${size} ${styles.menuItem}`}>
            <div
                className={styles.backgroundImg}
                style={{ backgroundImage: `url(${imageURL})` }}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>{title.toUpperCase()}</h1>
                <span className={styles.subtitle}>Shop Now</span>
            </div>
        </div>
    );
};

export default menuItem;
