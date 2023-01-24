import React from 'react';
import "./Student.css"

const Student = () => {
    return (
        <div className='flex justify-between mt-4 text-white'>
            <h1 className='text-[22px] capitalize'>All student hare</h1>
            <input className='search-input' type="text" />
        </div>
    );
};

export default Student;