import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className='nomatch'>
            <h3>Your URL doesn't match any path</h3>
            <p>404 Error!</p>
        </div>
    );
};

export default NoMatch;