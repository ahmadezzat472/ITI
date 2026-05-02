import QuoteDetails from '@/components/QuoteDetails';
import React from 'react';

const ID = ({quote}) => {
    return (
        <div>
            <QuoteDetails {...quote}/>
        </div>
    );
};

export default ID;
export async function getServerSideProps(context) {
    const {params} = context;
    const res = await fetch(`https://dummyjson.com/quotes/${params.ID}`)
    const data = await res.json();
    return{
        props:{
            quote:data
        }
    }
    
}