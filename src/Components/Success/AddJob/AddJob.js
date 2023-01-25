import React from 'react';
import { Link } from 'react-router-dom';
import "./AddJob.css"

const AddJob = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col' action="">
                <input name='name' placeholder='Your Name' className='jobInput' type="text" /><br />
                <input placeholder='Comapany Name' className='jobInput' type="text" /><br />
                <input placeholder='Job Title' className='jobInput' type="text" /> <br />
                <button className="btn"><a>Submit</a></button>

            </form>
        </div>
    );
};

export default AddJob;