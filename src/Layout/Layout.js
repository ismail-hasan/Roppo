import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Layout.css"

const main = () => {
    return (
        <div className='main h-screen pt-[150px]'>
            <div className='flex w-[1000px] border border-r-emerald-600 mx-auto'>
                <div className='border border-red-500 w-[25%]'>
                    <Navbar></Navbar>
                </div>
                <div className='border border-blue-500 w-full px-20'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default main;