'use client';

import useSWR from 'swr';
import Tile from './Tile.tsx';

const Collection: React.FC = () => {
  const orgs = [
    {
      org: 'calcom',
      language: 'typescript',
      label: 'good+first+issue',
    },
    {
      org: 'processing',
      language: 'javascript',
      label: 'good+first+issue',
    },
  ];

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const tiles = orgs.map((org) => {
    const apiUrl = `https://api.github.com/search/issues?q=is:open+is:issue+org:${org.org}`;
    const { data, error } = useSWR(apiUrl, fetcher);

    

    if (error) return <div key={org.org}>Failed to load for {org.org}</div>;
    

    // const firstIssue = data.items[0];
    console.log(data.)
    data.items.map((item)=>{
      return (
        <Tile
          key={item.id}
          title={item.title}
          body={item.body}
          organization={item.org}
          language={item.language}
          date={item.created_at}
        />
      );
    })
  });

  return <main className='m-4'>{tiles}</main>;
};

export default Collection;
