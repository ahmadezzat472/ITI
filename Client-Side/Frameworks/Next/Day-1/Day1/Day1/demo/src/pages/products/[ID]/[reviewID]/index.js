import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter()
    const {ID,reviewID} = router.query;
    return (
        <div>
            <h1> the prod ID is {ID} , the review ID is {reviewID}</h1>
        </div>
    );
};

export default index;