import React from 'react';
import "./Explore.scss";

const Explore = ({list, collectionName}) => {
    return (
        <div className='max-width explore-section'>
            <div className="collection-title">
                {collectionName}
            </div>
            <div className="explore-grid"></div>
        </div>
    );
};

export default Explore;