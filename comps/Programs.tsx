'use client'
import React, { useEffect, useState } from 'react';
import ProgramTile from "./Programtile";

export default function Programs() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch('/programs.json')  // Adjust the path based on your project structure
            .then(response => response.json())
            .then(data => setPrograms(data))
            .catch(error => console.error('Error fetching programs:', error));
    }, []);

    return (
        <div className='lg:grid grid-cols-2 my-0 justify-center items-center gap-4 '>
            {programs.map((program, index) => (

                <ProgramTile
                    
                    title={program.name}
                    body={program.desc}
                    url={program.link}
                    stipend={program.stipend}
                />
    

            ))}
        </div>
    );
}
