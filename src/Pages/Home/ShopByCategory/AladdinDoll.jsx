import React, { useEffect, useState } from 'react';
import AnimationCard from './Aladdin';


const AnimationDolls = () => {
    const [aladdin, setAladdin] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setAladdin(data))
    },[])
    return (
        <div>
            <h1 className='text-xl font-serif'>Aladdin  Dolls are here!</h1>
            <div className=' md:grid grid-cols-3 gap-8 pt-8'>
                {
                    aladdin.filter(aladdin=>aladdin.subCategoryName === "Aladdin").map(aladdin=> 
                    <AnimationCard
                    
                    key={aladdin.id}
                    aladdin={aladdin}
                    ></AnimationCard>
                    
                        )
                }
            </div>
        </div>
    );
};
export default AnimationDolls;