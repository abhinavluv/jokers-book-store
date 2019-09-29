import React from 'react';
import styles from './homepage.module.scss';

const homepage = (props) => {
    return (
        <div className={styles.homePage}>
            <div className={styles.directoryMenu}>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Biographies &amp; Auto-Biographies</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Kids</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Thriller</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Fiction</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Non-Fiction</h1>
                        <span className={styles.subtitle}>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default homepage;
