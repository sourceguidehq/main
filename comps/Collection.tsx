"use client"
import React from 'react';
import useSWR from 'swr';
import Tile from './Tile.tsx';
import organizations from '@/public/organizations.json'
const Collection: React.FC = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  let flag=1;

  const tiles = organizations.map((org) => {
    const apiUrl = `https://api.github.com/search/issues?q=is:open+is:issue+org:${org.org}+label:"${org.label}"`;
    const { data, error } = useSWR(apiUrl, fetcher);
    

    if (error) return <div key={org.org}>Failed to load for {org.org}</div>;

    // Ensure data is available and has items
    if (!data || !data.items){
      if(flag==1){
        flag=0;
        return(<>
          <p className='text-red-600'>If you are seeing this Refresh and wait for few seconds ...</p>
        </>);
      }
      else {
        return null;
      }
    }
    
    return (
      <div key={org.org} className='lg:grid grid-cols-2 my-0 justify-center items-center gap-4 '>
        
        {data.items.map((item) => (
          
          <a href={item.html_url} key={item.id} target='_blank'>
            
            <Tile
              title={item.title}
              body={item.body}
              organization={org.org}
              language={org.language}
              date={item.created_at}
            />
          </a>
        ))}
      </div>
    );
  });

  return <main className='grid my-0 mx-auto justify-center items-center gap-4 '>{tiles}</main>;
};

export default Collection;
