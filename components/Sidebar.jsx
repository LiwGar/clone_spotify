import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { RiSearchLine, RiListCheck } from "react-icons/ri";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import { HiPlus } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed w-[24%] h-full top-0 left-0 p-2" alt="sidebar">
      <div className="bg-spotify-gray px-6 py-6 rounded-lg" alt="home">
        <div>
          <Image
            width={80}
            height={80}
            src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
            alt="spotify_Logo"
          />
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
      <div
        className="bg-spotify-gray h-[67%] px-6 py-1 mt-2 font-bold rounded-lg"
        alt="your_Libray"
      >
        <div className="flex space-x-[12%] mt-3 ">
          <Link
            href={"#yourlibrary"}
            className="flex items-center gap-4 hover:text-white transition-colors"
          >
            <TfiLayoutColumn4Alt className="w-5 h-5" /> Your Library
          </Link>
          <button>
            <HiPlus className="w-5 h-5 ml-12 hover:text-white transition-colors" />
          </button>
          <button>
            <FiArrowRight className="w-6 h-6 -ml-5 hover:text-white transition-colors" />
          </button>
        </div>
        <button className="bg-spotify-lightgray w-[25%] h-8 mt-6 -ml-2.5 rounded-2xl text-sm text-white  hover:bg-stone-800 transition-colors">
          Artists
        </button>
        <div className="flex space-x-[60%] mt-4 ">
          <Link
            href={"#search-recents"}
            className="flex items-center gap-4 hover:text-white transition-colors"
          >
            <RiSearchLine className="w-5 h-5" />
          </Link>
          <Link
            href={"#recents-list"}
            className="flex items-center gap-4 text-sm font-normal hover:text-white transition-colors"
          >
            Recents <RiListCheck className="w-5 h-5" />
          </Link>
        </div>
        <nav className="flex flex-col mt-3 -ml-3.5 ">
          <ul className="font-normal text-white">
            <li>
              <Link
                href={"#abgt-list"}
                className="flex items-center gap-4 mt-1 px-2 py-2 hover:bg-stone-800 hover:rounded  transition-colors"
              >
                <div className="w-12 h-12 rounded-full">
                  <Image
                    width={60}
                    height={60}
                    src="https://pbs.twimg.com/profile_images/1289180733202890752/rZAMGF8X_400x400.jpg"
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
                className="flex items-center gap-4 mt-1 px-2 py-2 hover:bg-stone-800 hover:rounded  transition-colors"
              >
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
                className="flex items-center gap-4 mt-1 px-2 py-2 hover:bg-stone-800 hover:rounded  transition-colors"
              >
                <div className="w-12 h-12 rounded-full">
                  <Image
                    width={60}
                    height={60}
                    src="https://pbs.twimg.com/profile_images/1691376723848257537/gLhoDnxU_400x400.jpg"
                    alt="martingarrix"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <span>Martin Garrix</span>
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
