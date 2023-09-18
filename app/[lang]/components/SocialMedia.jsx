import React from 'react'
import { BsWhatsapp, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'
function SocialMedia() {

    return (
        <>
            <div className='fixed top-[40%] left-0 text-xl cursor-pointer  z-10'>
                <ul className='text-white m-0 parent'>
                    <li className='p-2.5 bg-green-600 dd'><BsWhatsapp className='hover:translate-x-1' /></li>
                    <li className='p-2.5 bg-[#00ACEE] dd'><BsTwitter className='hover:translate-x-1' /></li>
                    <li className='p-2.5 bg-[#3B5999] dd '><FaFacebookF className='hover:translate-x-1' /></li>
                    <li className='p-2.5 bg-[#E4405F] dd'><BsInstagram className='hover:translate-x-1' /></li>
                    <li className='p-2.5 bg-[#0077B5] dd'><BsLinkedin className='hover:translate-x-1' /></li>
                    <li className='p-2.5 bg-[#CD201F] dd'><BsYoutube className='hover:translate-x-1' /></li>
                </ul>
            </div>

        </>
    )
}

export default SocialMedia
