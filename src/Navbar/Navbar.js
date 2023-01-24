import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='bg-white'>
            <img className='rounded-full h-20 w-20' src="https://images.pexels.com/photos/15076352/pexels-photo-15076352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1>logo</h1>
            <div>
                <ul className='py-10 px-5'>
                    <span className='flex items-center pt-5'>
                        <AiFillHome></AiFillHome>
                        <Link to="/home">home</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <AiFillHome></AiFillHome>
                        <Link to="/about">about</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <AiFillHome></AiFillHome>
                        <Link>home</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <AiFillHome></AiFillHome>
                        <Link>home</Link> <br />
                    </span>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;