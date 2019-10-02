import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import styles from './directory.module.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Biographies & Auto-Biographies',
                    imageURL:
                        'http://www.bu.edu/missiology/files/2015/05/Biographies-banner-text.jpg',
                    id: 1
                },
                {
                    title: 'Kids',
                    imageURL:
                        'https://cbcpubliclibrary.net/wp-content/uploads/2018/05/summerbookclubinpark.jpg',
                    id: 2
                },
                {
                    title: 'Thriller',
                    imageURL:
                        'https://i.pinimg.com/originals/7d/6a/68/7d6a68fd1242b6bd0f23fae96dfdeaf6.jpg',
                    id: 3
                },
                {
                    title: 'Fiction',
                    imageURL:
                        'https://static-ssl.businessinsider.com/image/5c0ad7c045972a242a429018-2400/books-2018-4x3.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Non-Fiction',
                    imageURL:
                        'https://assets.readitforward.com/wp-content/uploads/2018/10/RIF-Holiday-NonFiction-830x625.jpg',
                    size: 'large',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className={styles.directoryMenu}>
                {this.state.sections.map(({ id, title, imageURL, size }) => (
                    <MenuItem key={id} title={title} imageURL={imageURL} />
                ))}
            </div>
        );
    }
}

export default Directory;
