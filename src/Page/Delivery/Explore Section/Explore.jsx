import React from 'react';
import "./Explore.scss";
import Explore_Card from '../../../components/Explore Card/Explore_Card';


const Explore = ({list, collectionName}) => {
    return (
        <div className='max-width explore-section'>
            <div className="collection-title">
                {collectionName}
            </div>
            <div className="explore-grid">
                {list.map((restaurant) => {
                    return <Explore_Card restaurant = {restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Explore;