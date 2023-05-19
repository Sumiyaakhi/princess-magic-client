import React, { useEffect, useState } from 'react';
import AnimationCard from './AnimationCard';


const AnimationDolls = () => {
    const [animationDolls, setAnimationDolls] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/animation')
        .then(res=>res.json())
        .then(data=> setAnimationDolls(data))
    },[])
    return (
        <div>
            <h1 className='text-xl font-serif'>Animation  Dolls are here!</h1>
            <div className=' md:grid grid-cols-3 gap-8 pt-8'>
                {
                    animationDolls.map(animationDoll=> 
                    <AnimationCard
                    
                    key={animationDoll.id}
                    animationDoll={animationDoll}
                    ></AnimationCard>
                    
                        )
                }
            </div>
        </div>
    );
};
export default AnimationDolls;