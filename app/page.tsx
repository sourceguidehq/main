import Image from 'next/image';
import Tile from "../comps/Tile.tsx";
import Collection from '../comps/Collection.tsx';
//className="flex min-h-screen flex-col items-center justify-between p-24"



export default function Home() {
  return (
    <main className='m-4'>


       {/* <Tile title='Fix for loop' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus libero, similique saepe voluptatem alias, est doloribus facere magni quod accusantium illo blanditiis! Corrupti recusandae tempore deserunt praesentium quia veniam.' organization='cal.com' language='JavaScript' date='1-7-2003'/> */}

      <Collection/>
   

    </main>
  )
}
