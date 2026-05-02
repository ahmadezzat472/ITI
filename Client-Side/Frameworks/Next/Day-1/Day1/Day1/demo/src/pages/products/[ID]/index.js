import { useRouter } from 'next/router';
import React from 'react';

const ID = () => {
    const router = useRouter()
    const {ID} = router.query;
    return (
        <div>
           <h1>the id is : {ID}</h1> 
        </div>
    );
};

export default ID;