import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import styles from './preview-collection.module.scss';

const previewCollection = ({ title, items }) => (
    <div className={styles.previewCollection}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <div className={styles.preview}>
            {items
                .filter((item, index) => index < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);

export default previewCollection;
