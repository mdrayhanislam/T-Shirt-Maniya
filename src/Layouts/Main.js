import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>Hi, I am Rayhan</h1>
            <h3>
            <Header></Header>
            </h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;