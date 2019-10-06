import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from './shop.data';

export class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default Shop;
