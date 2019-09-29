import React from 'react';
import './homepage.styles.scss';

const homepage = (props) => {
    return (
        <div className="homePage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Biographies &amp; Auto-Biographies</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Kids</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Thriller</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Fiction</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Non-Fiction</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default homepage;
