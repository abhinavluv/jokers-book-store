import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './menu-item.module.scss';

const menuItem = ({ title, imageURL, size, history, linkURL, match }) => {
    return (
        <div
            className={`${size} ${styles.menuItem}`}
            onClick={() => history.push(`${match.url}${linkURL}`)}
        >
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

export default withRouter(menuItem);

// Unlike normal functional components which take props and return the component,
// HOC (Higher Order Component) takes in the component and returns the modified/powerful form of that component
// Making a component an HOC, we get access to location, history and match which can be used for routing
