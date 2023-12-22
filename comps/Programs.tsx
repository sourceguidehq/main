'use client'
import React, { useEffect, useState } from 'react';
import ProgramTile from "./Programtile";

type Props ={ 
     filter_option:"Yes"|"No"|"";
}


export default function Programs({filter_option}:Props ){
    const [programs, setPrograms] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(()=>{ 
        if(filter_option === "Yes")setFilter("No");
        if(filter_option === "No")setFilter("Yes");    
    },[filter_option])
    

    useEffect(() => {
        // Fetch data from the JSON file
        fetch('/programs.json')  // Adjust the path based on your project structure
            .then(response => response.json())
            .then(data => setPrograms(data))
            .catch(error => console.error('Error fetching programs:', error));
    }, []);

    return (
        <div className='lg:grid grid-cols-2 my-0 justify-center items-center gap-4 '>
            {programs.map((program, index) => {

                if (program.stipend != filter) {
                    return (
                      <ProgramTile
                        key={index}  // Make sure to include a unique key for each element in the array
                        title={program.name}
                        body={program.desc}
                        url={program.link}
                        stipend={program.stipend}
                      />
                    );
                  }
                })}
        </div>
    );
}
