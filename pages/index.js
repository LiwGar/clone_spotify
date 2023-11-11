import React from "react";
import Head from 'next/head';
import ListAlbum from "../components/ListAlbum";

export default function Home() {
  return (
    <div className="pt-2 md:ml-[24%] lg:ml-[34%] xl:ml-[24%] md:w-[calc(100%-24.6%)] lg:w-[calc(100%-34.6%)] xl:w-[calc(100%-24.6%)] md:items-start lg:items-start">
        <div className='bg-spotify-gray pt-[6%] pl-72 pr-8 rounded-lg'>
          <ListAlbum 
            title="Recently played"
          />
      </div>
    </div>
  )
}
