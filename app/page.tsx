import Image from 'next/image';
import Tile from "../comps/Tile.tsx";
import Collection from "../comps/Collection.tsx"
//className="flex min-h-screen flex-col items-center justify-between p-24"



export default function Home() {
  return (
    <main className='m-4'>
      <Collection/>
    </main>
  )
}
