import React from 'react';
import { useParams } from 'react-router-dom';

const SingleHeader = () => {

    // Get post ID from dynamic link
    const { selectId } = useParams();

    return (
        <div>
            <div className="App-header">
                <h1>Single Post : {selectId}</h1>
            </div>
        </div>
    );
};

export default SingleHeader;