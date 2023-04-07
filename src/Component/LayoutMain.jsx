import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
const LayoutMain = () => {
    return (
        <div>
            <Header></Header> 
            <Outlet></Outlet>     
        </div>
    );
};

export default LayoutMain;