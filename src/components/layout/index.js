import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header/>
            <div className="main-content mb-5">
                { children }
            </div>
            <Footer/>
        </Fragment>
    );
};

export default Layout;