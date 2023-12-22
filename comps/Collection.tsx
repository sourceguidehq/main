"use client"
import React from 'react';
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
    {
      org: 'amahi',
      language: 'javascript',
      label: 'good+first+issue',
    },
  ];

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const tiles = orgs.map((org) => {
    const apiUrl = `https://api.github.com/search/issues?q=is:open+is:issue+org:${org.org}&per_page=50`;
    const { data, error } = useSWR(apiUrl, fetcher);

    if (error) return <div key={org.org}>Failed to load for {org.org}</div>;

    // Ensure data is available and has items
    if (!data || !data.items) return null;

    return (
      <div key={org.org} className='lg:grid grid-cols-2 my-0 justify-center items-center gap-4 '>
        {data.items.map((item) => (
          <Tile
            key={item.id}
            title={item.title}
            body={item.body}
            organization={org.org}
            language={org.language}
            date={item.created_at}
          />
        ))}
      </div>
    );
  });

  return <main className='grid  my-0 mx-auto justify-center items-center gap-4 '>{tiles}</main>;
};

export default Collection;
