import Link from 'next/link';
import React from 'react';

const QuotesComponent = (props) => {
    const {quotes} = props;
    console.log(quotes);
    return (
        <div>
            <h1>Quotes Component</h1>
            <div className="row">
                {
                    quotes.map((q)=>{
                        return(
                            <Link href={`/quotes/${q.id}`} className='col-12 col-lg-6 text-decoration-none text-dark'>
                                <h2>{q.quote}</h2>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default QuotesComponent;