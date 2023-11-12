import React from "react";
import Head from 'next/head';
import ListAlbum from "../components/ListAlbum";
import ListArtists from "../components/ListArtists";

export default function Home() {
  return (
    <div className="bg-spotify-black items-center justify-center md:ml-[36%] md:w-[calc(100%-36.6%)] lg:ml-[34%] lg:w-[calc(100%-34.6%)] 
        xl:ml-[32%] xl:w-[calc(100%-32.6%)] lg:items-start">
      <div className='bg-spotify-gray rounded-lg'>
        <ListAlbum title="Recently played" />
        <ListArtists title="Your favorite artists" />
        <ListAlbum title="Popular artists" />
      </div>
    </div>
  )
}
