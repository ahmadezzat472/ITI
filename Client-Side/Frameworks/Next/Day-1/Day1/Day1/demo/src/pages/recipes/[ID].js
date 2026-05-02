import RecipeDetails from '@/components/RecipeDetails';
// import { useRouter } from 'next/router';
import React from 'react';

const ID = ({recipe}) => {
    // const router = useRouter()
    // if(router.isFallback){
    //     return <>Loading....</>
    // }
    return (
        <div>
            <RecipeDetails {...recipe}/>
        </div>
    );
};

export default ID;
export async function getStaticPaths() {
    return{
        paths:[
            // {params:{ID:'1'}},
            // {params:{ID:'2'}},
        ],
        // fallback:false
        // fallback:true
        fallback:'blocking'
    }
    
}
export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`https://dummyjson.com/recipes/${params.ID}`)
    const data = await res.json()
    return{
        props:{
            recipe:data
        }
    }
    
}