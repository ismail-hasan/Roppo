import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import "./Student.css"

const Student = () => {
    const students = useLoaderData()
    return (
        <div>
            <div className='flex justify-between mt-4 text-white'>
                <h1 className='text-[22px] capitalize'>All student hare</h1>
                <input className='search-input' type="text" />
            </div>
            <div className='grid grid-cols-3 mt-4 gap-7 overflow-y-scroll h-96'>
                {
                    students.map((student, idx) => {
                        return (
                            <div className='userCard text-white text-center' key={idx}>
                                <div className='flex justify-center'>
                                    <img className='w-32 h-32 rounded-full ' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                                </div>
                                <h1 className='text-[23px] capitalize'>{student.name}</h1>
                                <h1>{student.dec}</h1>
                                <div className='flex justify-center gap-3'>
                                    <FaFacebook></FaFacebook>
                                    <FaFacebook></FaFacebook>
                                    <FaFacebook></FaFacebook>
                                </div>
                                <button className='mt-5 border text-[18px] border-white py-1 rounded-[30px] px-5'>See More</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Student;