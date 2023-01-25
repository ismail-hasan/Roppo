import React from 'react';
import { Link } from 'react-router-dom';
import "./AddJob.css"

const AddJob = () => {
    return (
        <div>
            <form className='flex flex-col' action="">
                <input placeholder='Your Name' className='jobInput' type="text" /><br />
                <input placeholder='Comapany Name' className='jobInput' type="text" /><br />
                <input placeholder='Job Title' className='jobInput' type="text" /> <br />
                <button className="btn"><a>Submit</a></button>
                <button className="btn">button</button>

            </form>
        </div>
    );
};

export default AddJob;