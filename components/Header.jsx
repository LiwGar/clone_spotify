import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { HiMenuAlt1 } from "react-icons/hi";


const Header = (props) => {

    const {setShowSidebar} = props;

    return (
        <header className="z-40 fixed items-start flex justify-between top-0 left-0 mr-2 h-17 px-6 pt-6 pb-4 w-full md:items-start md:ml-[36%] md:w-[calc(100%-36.6%)] 
                lg:items-start lg:left-2 lg:ml-[33.2%] lg:w-[calc(100%-34.5%)] xl:items-end xl:ml-[31.4%] xl:w-[calc(100%-32.6%)] bg-spotify-gray bg-opacity-80">
            <div className="flex gap-2" alt='rows_Header'>
                <button className="flex items-center justify-center w-8 h-8 hover:text-white transition-colors md:hidden">
                    <HiMenuAlt1 onClick={() => setShowSidebar(true)}
                        className="w-6 h-6 cursor-pointer"/>
                </button>
                <div className="items-center justify-center bg-spotify-black w-8 h-8 rounded-full hidden md:inline-flex hover:text-white transition-colors">
                    <GoChevronLeft className="w-7 h-7 cursor-pointer "/>
                </div>
                <div className="items-center justify-center bg-spotify-black w-8 h-8 rounded-full hidden md:inline-flex hover:text-white transition-colors">
                    <GoChevronRight className="w-7 h-7 cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center justify-end font-bold text-xs w-full gap-2 md:text-xs md:w-[100%] lg:w-[80%] xl:w-[60%]">
                    <button className="flex items-center justify-center w-[29%] h-8 bg-spotify-white text-spotify-black rounded-2xl hover:scale-105 transition-transform">
                        Explore Premium
                    </button>
                    <button className="flex items-center justify-center w-[29%] h-8 gap-1 md:w-[24%] bg-spotify-black text-spotify-white rounded-2xl hover:scale-105 transition-transform">
                        <HiOutlineArrowCircleDown className="w-5 h-5 hidden lg:inline "/>
                        Install App
                    </button>
                    <div className="flex items-center justify-center bg-spotify-black w-8 h-8 rounded-full hover:text-white transition-colors">
                        <IoNotificationsOutline className="w-5 h-5 cursor-pointer"/>
                    </div>
                    <div className="flex items-center justify-center bg-spotify-black w-8 h-8 rounded-full hover:text-white transition-colors">
                        <SlUser className="w-4 h-4 cursor-pointer"/>
                    </div>
            </div>
        </header>
    );    
};

export default Header; 