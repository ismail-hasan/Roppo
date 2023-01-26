import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddJob from './AddJob/AddJob';
import "./success.css"

const Success = () => {
    const successStu = useLoaderData()
    return (
        <div className='text-white'>
            <h1 className='text-[22px] my-4 mb-4  capitalize'>Our Success Student</h1>
            <div className='md:flex gap-10 h-[400px] overflow-y-scroll'>
                <div className='success w-[100%] md:w-[47%] px-5 overflow-y-scroll'>

                    {
                        successStu.map((success, idx) => {
                            return (
                                <div key={idx}>
                                    <div className='flex items-center px-2 into-success mt-5'>
                                        <img className='w-[90px] object-cover rounded-[20px] h-[90px] p-2' src="https://images.pexels.com/photos/7163731/pexels-photo-7163731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <div className='ml-2'>
                                            <h1 className='text-[21px] capitalize'>our name</h1>
                                            <p className='text-[16px] capitalize -mt-1'>vlo hoata jau masud</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='w-full md:w-[47%] mt-10 md:mt-0'>
                    <h1 className='text-[22px] capitalize'>add you job hare </h1>
                    <AddJob></AddJob>
                </div>
            </div>
        </div>
    );
};

export default Success;