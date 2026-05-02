import React from 'react';

const QuoteDetails = (props) => {
    return (
        <div>
            <h1>Quote Details</h1>
            <h1>{props.quote}</h1>
            <h2>{props.author}</h2>
        </div>
    );
};

export default QuoteDetails;