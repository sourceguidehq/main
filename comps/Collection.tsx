"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Tile from './Tile.tsx';
import organizations from '@/public/organizations.json';


const Collection: React.FC = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load data from cache if available
    const cachedData = localStorage.getItem('issuesData');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Include your personal access token
      const token = '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'; // Replace with your actual token

      const promises = organizations.map(async (org) => {
        const apiUrl = `https://api.github.com/search/issues?q=is:open+is:issue+org:${org.org}+label:"${org.label}"`;
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 403 || response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        }

        const result = await response.json();
        return { org: org.org, data: result };
      });

      const results = await Promise.all(promises);
      const combinedData = results.reduce((acc, { org, data }) => {
        acc[org] = data;
        return acc;
      }, {});

      setData(combinedData);
      localStorage.setItem('issuesData', JSON.stringify(combinedData)); // Cache data
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return (
      <div>
        <p className='text-red-600'>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p className='text-red-600'>
          {isLoading ? 'Loading data...' : 'If you are seeing this, refresh and wait for a few seconds ...'}
        </p>
      </div>
    );
  }

  return (
    <main className='grid my-0 mx-auto justify-center items-center gap-4 '>
      {organizations.map((org) => (
        <div key={org.org} className='lg:grid grid-cols-2 my-0 justify-center items-center gap-4 '>
          {data[org.org] && data[org.org].items ? (
            data[org.org].items.map((item) => (
              <a href={item.html_url} key={item.id} target='_blank' rel='noopener noreferrer'>
                <Tile
                  title={item.title}
                  body={item.body}
                  organization={org.org}
                  language={org.language}
                  date={item.created_at}
                />
              </a>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ))}
    </main>
  );
};

export default Collection;
