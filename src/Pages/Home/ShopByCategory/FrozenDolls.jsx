import React, { useEffect, useState } from 'react';
import FrozenCard from './FrozenCard';

const FrozenDolls = () => {
    const [frozenDolls, setFrozenDolls] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/frozen')
        .then(res=>res.json())
        .then(data=> setFrozenDolls(data))
    },[])
    return (
        <div>
            <h1 className='text-xl font-serif'>Frozen Dolls are here!</h1>
            <div className=' md:grid grid-cols-3 gap-8 pt-8'>
                {
                    frozenDolls.map(frozenDoll=> 
                    <FrozenCard
                    
                    key={frozenDoll.id}
                    frozenDoll={frozenDoll}
                    ></FrozenCard>
                    
                        )
                }
            </div>
        </div>
    );
};

export default FrozenDolls;