'use client'
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Tile from './Tile.tsx';
import organizations from '@/public/organizations.json';

const Collection: React.FC = () => {
  const fetcher = (url: string, token: string) => 
    fetch(url, { headers: { Authorization:` Bearer ${token}` } })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      });

  const [errorMessageDisplayed, setErrorMessageDisplayed] = useState(false);
  const [organizationsData, setOrganizationsData] = useState(organizations);

  const fetchDataForOrganization = async (org) => {
    const cachedData = localStorage.getItem(`orgData-${org.org}`);
    if (cachedData) {
      return JSON.parse(cachedData);
    } else {
      const apiUrl = `https://api.github.com/search/issues?q=is:open+is:issue+org:${org.org}+label:%22good+first+issue%22`;
      const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

      try {
        const data = await fetcher(apiUrl, token);
        localStorage.setItem(`orgData-${org.org}`, JSON.stringify(data));
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorMessageDisplayed(true);
        return null;
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const updatedData = await Promise.all(
        organizationsData.map(async (org) => {
          const data = await fetchDataForOrganization(org);
          return { ...org, data };
        })
      );

      setOrganizationsData(updatedData);
    };

    fetchData();
  }, []);

  const renderTiles = () => {
    return organizationsData.map((org) => {
      if (!org.data || !org.data.items) {
        return errorMessageDisplayed ? null : (
          <p key={`error-${org.org}`} className='text-red-400'>
            Failed to load data for {org.org}. Please try again later.
          </p>
        );
      }

      return (
        <div key={org.org} className='lg:grid grid-cols-2 my-0 justify-center items-center gap-4 '>
          {org.data.items.map((item) => (
            <a href={item.html_url} key={item.id} target='_blank' rel='noopener noreferrer'>
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
  };

  return (
    <main className='grid my-0 mx-auto justify-center items-center gap-4 '>
      {renderTiles()}
    </main>
  );
};

export default Collection;