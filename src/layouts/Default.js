import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Default = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;