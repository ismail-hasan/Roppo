import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const StuDetails = () => {
    return (
        <div className='text-white overflow-y-scroll h-[500px]'>
            <Link to="/home" className='flex items-center mt-3'>
                <span className='text-[23px] mr-2 cursor-pointer'><AiOutlineArrowLeft></AiOutlineArrowLeft></span>
                <h1 className='text-[17px]'>Back To Home</h1>
            </Link>
            <h1 className='text-[22px] my-4 mb-4  capitalize'>Our Success Student</h1>
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="" />
            <h1 className='text-[32px] capitalize'>Ismial Hossain</h1>
            <p className='text-[17px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, tempore porro? Laudantium, expedita, hic deserunt labore, repellendus consequatur placeat autem ipsum vero corporis delectus quo voluptates quia incidunt minima ad est quam earum nemo tenetur error. Architecto possimus accusamus magni fugit doloribus veritatis quos, voluptas mollitia recusandae rerum optio quibusdam nisi voluptatum excepturi nemo libero perferendis nam. Molestias cumque distinctio, cum quaerat unde deleniti? Perferendis, excepturi ducimus? Aut consequuntur maiores facere libero amet dignissimos! Necessitatibus quidem consectetur reiciendis, nobis dolores similique ipsam nostrum, velit voluptas, repellendus laboriosam numquam! Optio quas necessitatibus suscipit, itaque asperiores corrupti quisquam vero explicabo odit voluptatum.</p>
        </div>
    );
};

export default StuDetails;