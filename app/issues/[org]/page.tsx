"use client"
import React from 'react'
import Tile from '@/comps/Tile';
import Link from 'next/link';


type Props = {
    org:String
}

export default function page({ params }: { params: { org: string } }) {

    const storedString = localStorage.getItem(`orgData-${params.org}`);
    const data: any = JSON.parse(storedString);
    console.log(data)


    

  return (

    <div className='w-[100%] flex items-center justify-center'>
    <div key={data.org} className='lg:grid grid-cols-2 my-0 justify-center items-center gap-4 '>
    {data.items.map((item) => (
      <Link href={item.html_url} key={item.id} target='_blank' rel='noopener noreferrer'>
        <Tile
          title={item.title}
          body={item.body}
          organization={params.org}
          language={localStorage.getItem(`orglang-${params.org}`)}
          date={item.created_at}
        />
      </Link>
    ))}
  </div>
  </div>

  )
}