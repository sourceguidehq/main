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
        <div className=' columns-2'>
            {programs.map((program, index) => (
<<<<<<< HEAD
                
=======
                <section>
>>>>>>> 30f5e67a07c136e9730a30987afd23ff5bc4a52a
                <ProgramTile
                    
                    title={program.name}
                    body={program.desc}
                    url={program.link}
                    stipend={program.stipend}
                />
<<<<<<< HEAD
               
            )) }
        </>
=======
                </section>

            ))}
        </div>
>>>>>>> 30f5e67a07c136e9730a30987afd23ff5bc4a52a
    );
}
