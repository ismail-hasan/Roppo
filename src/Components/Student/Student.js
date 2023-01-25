import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import "./Student.css"

const Student = () => {
    const students = useLoaderData()
    const [search, setSearch] = useState("")
    return (
        <div>
            <div className='flex justify-between mt-4 text-white'>
                <h1 className='text-[22px] capitalize'>All student hare</h1>
                <input onChange={e => setSearch(e.target.value)} className='search-input' type="text" placeholder='Search Hare' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-7 overflow-y-scroll h-96'>
                {
                    students.filter(stu => stu?.name.toLowerCase().includes(search)).map((student, idx) => {
                        return (
                            <div className='userCard text-white text-center' key={idx} >
                                <div className='flex justify-center'>
                                    <img className='w-32 h-32 rounded-full ' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                                </div>
                                <h1 className='text-[23px] capitalize pt-2'>{student.name}</h1>
                                <h1 className='pt-1 leading-[22px]'>{student.dec}</h1>
                                <div className='flex justify-center gap-3 mt-3'>
                                    <FaFacebook></FaFacebook>
                                    <FaFacebook></FaFacebook>
                                    <FaFacebook></FaFacebook>
                                </div>
                                <button className="btn">
                                    <Link to="/stu-details">See More</Link>
                                </button>
                            </div>

                        )
                    })
                }

            </div>

        </div>
    );
};

export default Student;