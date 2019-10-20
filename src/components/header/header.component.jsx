import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const header = ({ currentUser }) => {
    return (
        <div className={styles.header}>
            <Link to='/' className={styles.logoContainer}>
                <Logo className={styles.logo} />
            </Link>

            <div className={styles.options}>
                <Link to='/shop' className={styles.option}>
                    SHOP
                </Link>

                <Link to='/contact' className={styles.option}>
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className={styles.option} onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                    <Link className={styles.option} to='/signin/'>SIGN IN</Link>
                )}
            </div>
        </div>
    );
};

export default header;
