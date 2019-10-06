import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const header = () => {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logoContainer}>
                <Logo className={styles.logo} />
            </Link>

            <div className={styles.options}>
                <Link to="/shop" className={styles.option}>
                    SHOP
                </Link>

                <Link to="/contact" className={styles.option}>
                    CONTACT
                </Link>
            </div>
        </div>
    );
};

export default header;
