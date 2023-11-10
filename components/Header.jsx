import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { HiMenuAlt1 } from "react-icons/hi";


const Header = (props) => {

    const {setShowSidebar} = props;

    return (
        <header className="fixed top-0 left-0 md:ml-[24%] lg:ml-[34%] xl:ml-[24%] w-full md:w-[calc(100%-24.6%)] lg:w-[calc(100%-34.6%)] xl:w-[calc(100%-24.6%)] bg-spotify-gray flex justify-between items-center md:items-start lg:items-start mr-2 h-16 p-6">
            <div className="flex gap-2" alt='rows_Header'>
                <button className="flex items-center justify-center w-8 h-8 hover:text-white transition-colors md:hidden">
                    <HiMenuAlt1 onClick={() => setShowSidebar(true)}
                        className="w-6 h-6 cursor-pointer"/>
                </button>
                <div className="items-center justify-center bg-spotify-black w-8 h-8 rounded-full hidden md:inline-flex hover:text-white transition-colors">
                    <GoChevronLeft className="w-7 h-7 cursor-pointer "/>
                </div>
                <div className="items-center justify-center bg-spotify-black w-8 h-8  rounded-full hidden md:inline-flex hover:text-white transition-colors">
                    <GoChevronRight className="w-7 h-7 cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-end text-xs md:text-sm font-bold md:w-[50%] lg:w-[80%] xl:w-[50%] w-full gap-2">
                    <button className="flex items-center justify-center w-[29%] h-8 bg-spotify-white text-spotify-black rounded-2xl hover:scale-105 transition-transform">
                        Explore Premium
                    </button>
                    <button className="flex items-center justify-center gap-1 w-[29%] md:w-[24%] h-8 bg-spotify-black text-spotify-white rounded-2xl hover:scale-105 transition-transform">
                        <HiOutlineArrowCircleDown className="w-5 h-5 hidden md:inline "/>
                        Install App
                    </button>
                    <div className="flex items-center justify-center bg-spotify-black w-7 h-7 rounded-full hover:text-white transition-colors">
                        <IoNotificationsOutline className="w-5 h-5 cursor-pointer"/>
                    </div>
                    <div className="flex items-center justify-center bg-spotify-black w-7 h-7 rounded-full hover:text-white transition-colors">
                        <SlUser className="w-4 h-4 cursor-pointer"/>
                    </div>
            </div>
        </header>
    );    
};

export default Header; 