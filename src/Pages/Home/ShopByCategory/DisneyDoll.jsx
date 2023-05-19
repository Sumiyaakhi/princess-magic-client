import React, { useEffect, useState } from 'react';
import DisneyCard from './DisneyCard';

const DisneyDoll = () => {
    const [disneyDolls, setDisneyDolls] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/disneyPrincess')
        .then(res=>res.json())
        .then(data=> setDisneyDolls(data))
    },[])
    return (
        <div>
            <h1 className='text-xl font-serif'>Disney Princess Dolls are here!</h1>
            <div className=' md:grid grid-cols-3 gap-8 pt-8'>
                {
                    disneyDolls.map(disneyDoll=> 
                    <DisneyCard 
                    
                    key={disneyDoll.id}
                    disneyDoll={disneyDoll}
                    ></DisneyCard>
                    
                        )
                }
            </div>
        </div>
    );
};

export default DisneyDoll;