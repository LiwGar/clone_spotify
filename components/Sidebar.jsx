import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { RiSearchLine, RiListCheck, RiCloseLine } from "react-icons/ri";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import { HiPlus } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";


const Sidebar = (props) => {

    const {showSidebar, setShowSidebar} = props;

  return (
    <div className={`fixed w-[100%] h-full top-0 bg-spotify-black ${ showSidebar ? 'left-0' : '-left-full'} 
        max-sm:z-40 max-sm:p-2 sm:p-2 sm:z-40 md:left-0 md:w-[36%] lg:left-0 lg:w-[34.5%] xl:left-0 xl:w-[32%] transition-all duration-300`} alt="sidebar">
      <div className="bg-spotify-gray px-6 py-6 rounded-lg" alt="home">
        <div className="flex justify-between">
            <div>
                <Image
                    width={80}
                    height={80}
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                    alt="spotify_Logo"
                />
            </div>
            <button className="flex items-center justify-end -mr-1 hover:text-white transition-colors md:hidden">
                <RiCloseLine onClick={() => setShowSidebar(false)}
                    className="w-7 h-7 cursor-pointer" />
            </button>
        </div>
        <nav>
          <ul className="font-bold">
            <li>
              <Link
                href={"#home"}
                className="flex items-center gap-5 mt-4 hover:text-white transition-colors"
              >
                <GoHome className="w-7 h-7" /> Home
              </Link>
            </li>
            <li>
              <Link
                href={"#search"}
                className="flex items-center gap-6 mt-4 hover:text-white transition-colors"
              >
                <RiSearchLine className="w-6 h-6" /> Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-spotify-gray font-bold h-[72%] px-6 py-1 mt-2 md:px-4 xl:pr-5 rounded-lg"
            alt="your_Libray">
        <div className="flex justify-between mt-3 xl:space-x-[10%]">
          <Link
            href={"#yourlibrary"}
            className="flex items-center gap-4 md:w-full hover:text-white transition-colors">
            <TfiLayoutColumn4Alt className="w-5 h-5" /> Your Library
          </Link>
          <div className="flex justify-between gap-7">
            <button>
              <HiPlus className="w-5 h-5 ml-12 hover:text-white transition-colors" />
            </button>
            <button>
              <FiArrowRight className="w-6 h-6 -ml-4  hover:text-white transition-colors" />
            </button>
          </div>
        </div>
        <button className="bg-spotify-lightgray text-sm text-white w-[25%] h-8 mt-6 -ml-2.5 rounded-2xl hover:bg-spotify-bghover transition-colors">
          Artists
        </button>
        <div className="flex justify-between  mt-4 md:space-x-[28%] xl:space-x-[76%] xl:pr-5">
          <Link
            href={"#search-recents"}
            className="flex items-center gap-4 hover:text-white transition-colors"
          >
            <RiSearchLine className="w-5 h-5" />
          </Link>
          <Link
            href={"#recents-list"}
            className="flex items-end gap-4 text-sm font-normal hover:text-white transition-colors"
          >
            Recents <RiListCheck className="w-5 h-5" />
          </Link>
        </div>
        <nav className="flex flex-col mt-3 -ml-3.5 md:snap-y">
          <ul className="font-semibold text-white">
            <li>
              <Link
                href={"#abgt-list"}
                className="flex items-center gap-4 mt-1 px-2 py-2 hover:bg-spotify-bghover hover:rounded  transition-colors
                snap-left">
                <div className="w-12 h-12 rounded-full">
                  <Image
                    width={60}
                    height={60}
                    src="https://pbs.twimg.com/profile_images/1776287823311589382/fxk28i5V_400x400.jpg"
                    alt="martingarrix"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <span>Above & Beyond</span>
                  <p className="text-sm text-gray-400">Artist</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={"#armada-list"}
                className="flex items-center gap-4 mt-1 px-2 py-2 hover:bg-spotify-bghover hover:rounded  transition-colors
                snap-left">
                <div className="w-12 h-12 rounded-full">
                  <Image
                    width={60}
                    height={60}
                    src="https://pbs.twimg.com/profile_images/1699326244523757568/Xk3boAVm_400x400.jpg"
                    alt="martingarrix"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <span>Armin van Buuren</span>
                  <p className="text-sm text-gray-400">Artist</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={"#martingarrix-list"}
                className="flex items-center gap-4 mt-1 px-2 py-2 hover:bg-spotify-bghover hover:rounded transition-colors
                snap-left">
                <div className="w-12 h-12 rounded-full">
                  <Image
                    width={60}
                    height={60}
                    src="https://pbs.twimg.com/profile_images/1729131801522630656/-FTZR5zr_400x400.jpg"
                    alt="martingarrix"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <span>Martin Garrix</span>
                  <p className="text-sm text-gray-400">Artist</p>
                </div>
              </Link>
              <Link
                href={"#kygo-list"}
                className="flex items-center gap-4 mt-1 px-2 py-2 hover:bg-stone-800 hover:rounded  transition-colors
                snap-left">
                <div className="w-12 h-12 rounded-full">
                  <Image
                    width={60}
                    height={60}
                    src="https://pbs.twimg.com/profile_images/1777724872820457472/Z3g1cR7b_400x400.jpg"
                    alt="martingarrix"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <span>Kygo</span>
                  <p className="text-sm text-gray-400">Artist</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;


// time: 1:42:29