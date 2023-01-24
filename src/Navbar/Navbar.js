import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='text-white w-full flex justify-center items-center flex-col py-5'>
            <div className='flex justify-center items-center flex-col'>
                <img className='rounded-full h-20 w-20' src="https://images.pexels.com/photos/15076352/pexels-photo-15076352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1 className='text-[22px]'>Ismail Hossain</h1>
                <p className='text-[14px]'>Web Developer</p>
            </div>
            <div>
                <ul className='px-5 py-5'>
                    <span className='flex items-center pt-5'>
                        <AiFillHome className='text-[25px] mr-2' ></AiFillHome>
                        <Link to="/home">Home</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <AiFillHome className='text-[25px] mr-2' ></AiFillHome>
                        <Link to="/about">All Students</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <AiFillHome className='text-[25px] mr-2' ></AiFillHome>
                        <Link>Gellery</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <AiFillHome className='text-[25px] mr-2' ></AiFillHome>
                        <Link>All Sir</Link> <br />
                    </span>
                    <div>
                        <h1>how arre you</h1>
                    </div>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;