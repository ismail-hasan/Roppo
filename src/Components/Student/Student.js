import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./Student.css"

const Student = () => {
    const students = useLoaderData()
    return (
        <>
            <div className='flex justify-between mt-4 text-white'>
                <h1 className='text-[22px] capitalize'>All student hare</h1>
                <input className='search-input' type="text" />
            </div>
            <div className='grid grid-cols-3 mt-4'>
                {
                    students.map((student, idx) => {
                        return (
                            <div className='userCard' key={student.idx}>
                                <h1>{student.name}</h1>
                                <h1>{student.dec}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Student;