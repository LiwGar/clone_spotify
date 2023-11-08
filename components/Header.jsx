import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";


const Header = () => {
    return (
        <header className="bg-inherit flex justify-between items-center ml-[24%] md:w-[calc(100%-24.6%)] mr-2 h-16 p-6">
            <div className="flex gap-2" alt='rows_Header'>
                <div className="flex items-center justify-center bg-spotify-black w-7 h-7 rounded-full">
                    <GoChevronLeft className="w-6 h-6 cursor-pointer"/>
                </div>
                <div className="flex items-center justify-center bg-spotify-black w-7 h-7 rounded-full">
                    <GoChevronRight className="w-6 h-6 cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-end text-sm text-spotify-white font-bold w-[50%] gap-2">
                    <button className="flex items-center justify-center w-[29%] h-8 bg-spotify-white text-spotify-black rounded-2xl">
                        Explore Premium
                    </button>
                    <button className="flex items-center justify-center gap-1 w-[24%] h-8 bg-spotify-black  rounded-2xl">
                        <HiOutlineArrowCircleDown className="w-5 h-5 "/>
                        Install App
                    </button>
                    <div className="flex items-center justify-center bg-spotify-black w-7 h-7 rounded-full">
                        <IoNotificationsOutline className="w-5 h-5 cursor-pointer"/>
                    </div>
                    <div className="flex items-center justify-center bg-spotify-black w-7 h-7 rounded-full">
                        <SlUser className="w-4 h-4 cursor-pointer"/>
                    </div>
            </div>
        </header>
    );    
};

export default Header; 