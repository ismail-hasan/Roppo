import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { FaBars } from 'react-icons/fa';
import "./Layout.css"

const main = () => {
    return (
        <div className='main h-screen  pt-[50px]'>
            <div className='flex max-w-[1200px] h-[90%] mx-auto'>
                <div>
                    <span className='text-white text-[27px] p-5'><FaBars></FaBars></span>
                </div>
                <div className='left-section hidden md:flex w-[20%]  z-10'>

                    <Navbar></Navbar>
                </div>
                <div className='right-section w-[80%] md:w-[80%] mx-auto pr-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default main;