import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiHappyAlt } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';
import { TfiGallery } from 'react-icons/tfi';
import { FaUserTie } from 'react-icons/fa';

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
                        <FaUserTie className='text-[25px] mr-2' ></FaUserTie>
                        <Link to="/student">All Students</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <TfiGallery className='text-[25px] mr-2' ></TfiGallery>
                        <Link to="/gallery">Gallery</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <GiTeacher className='text-[25px] mr-2' ></GiTeacher>
                        <Link to="/teacher">All Sir</Link> <br />
                    </span>
                    <span className='flex items-center pt-5'>
                        <BiHappyAlt className='text-[25px] mr-2' ></BiHappyAlt>
                        <Link to="/success">Success Student</Link> <br />
                    </span>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;