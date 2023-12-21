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

    // Ensure data is available and has items
    if (!data || !data.items) return null;

    return data.items.map((item) => (
      <Tile
        key={item.id}
        title={item.title}
        body={item.body}
        organization={org.org} // Use org.org, assuming you want the organization from the org object
        language={org.language} // Use org.language, assuming you want the language from the org object
        date={item.created_at}
      />
    ));
  });

  return <main className='m-4'>{tiles}</main>;
};

export default Collection;
