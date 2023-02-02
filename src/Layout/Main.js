import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import UpNavHeading from '../Shared/UpNavHeading/UpNavHeading';


const Main = () => {
    return (
        <div>
            <UpNavHeading></UpNavHeading>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;