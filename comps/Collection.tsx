'use client'
import React, { useState } from 'react';
import useSWR from 'swr';
import Tile from './Tile.tsx';
import organizations from '@/public/organizations.json';

const Collection: React.FC = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [errorMessageDisplayed, setErrorMessageDisplayed] = useState(false);

  const tiles = organizations.map((org) => {
    const apiUrl = `https://api.github.com/search/issues?q=is:open+is:issue+org:${org.org}+label:%22good+first+issue%22`;
    const token = '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';
    const { data, error } = useSWR(apiUrl, (url) => fetcher(url, { headers: { Authorization: `Bearer ${token}` } }));


    

    if (error) return <div key={org.org}>Failed to load for {org.org}</div>;

    // Ensure data is available and has items
    if (!data || !data.items) {
      if (!errorMessageDisplayed) {
        setErrorMessageDisplayed(true);
        return (
          <p key="error-message" className='text-red-400'>
            Wait for a few seconds and refresh...
          </p>
        );
      } else {
        return null; // Return null if the error message has already been displayed
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
