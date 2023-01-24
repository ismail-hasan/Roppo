import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Layout.css"

const main = () => {
    return (
        <div className='main h-screen  pt-[50px]'>
            <div className='flex w-[1200px] h-[90%] mx-auto'>
                <div className='left-section w-[20%] z-10'>
                    <Navbar></Navbar>
                </div>
                <div className='right-section w-[75%] pr-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default main;