import React, { useState } from 'react';
import logo from '../assets/C.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Header() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    const navElement = ["Home","Courses", "Contact Us", "About Us"];

    return (
        <header className='bg-[#1c7689] p-4 w-full'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <img className='w-[70px] h-[70px] rounded-full md:mr-9' src={logo} alt="logo" />

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center justify-between flex-grow'>
                    <div className='flex gap-[20px]'>
                        {navElement.map((item, index) => (
                            <a key={index} href='' className='text-[20px] font-semibold text-white transition-all duration-200 hover:scale-110 cursor-pointer'>
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className='flex flex-col bg-black text-white rounded-lg py-1 px-4 items-center'>
                        <span className='flex items-center'><IoCall className='mr-2'/> +91-7689045764</span>
                        <span className='flex items-center'><MdEmail className='mr-2'/>demographic@gmail.com</span>
                    </div>
                </nav>

                {/* Mobile Hamburger Icon */}
                <div className='md:hidden'>
                    {!toggle
                        ? <GiHamburgerMenu className='text-[30px] text-white hover:scale-110 cursor-pointer' onClick={handleToggle} />
                        : <IoCloseCircle className='text-[30px] text-white hover:scale-110 cursor-pointer' onClick={handleToggle} />
                    }
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all absolute top-9 right-9 z-10 duration-500 ease-in-out ${toggle ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className='bg-gray-600 mt-4 flex flex-col items-center gap-4 p-4 rounded-lg'>
                    {navElement.map((item, index) => (
                        <a key={index} href='' className='text-[20px] font-semibold text-orange-500 transition-all duration-200 hover:scale-110 cursor-pointer'>
                            {item}
                        </a>
                    ))}
                    <div className='flex flex-col items-center mt-4'>
                        <span className='flex items-center text-white'><IoCall className='mr-2'/> +91-7689045764</span>
                        <span className='flex items-center text-white'><MdEmail className='mr-2'/>demographic@gmail.com</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
