import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h3 className='font-bold mb-5'>Fins Us on</h3>
            <div className="join join-vertical w-full ">
           <button className="btn bg-base-100 justify-start join-item"> <FaFacebook></FaFacebook>  Facebook</button>
           <button className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
           <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
       </div>
        </div>
    );
};

export default FindUs;