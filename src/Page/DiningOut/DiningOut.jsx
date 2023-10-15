import React from 'react';
import "./DiningOut.scss";
import Filters from '../../components/Filters/Filters';


const diningFilters = [
    {
        id: 1,
        icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Rating 4.0+",
    },
    {
        id: 3,
        title: "Outdoor Seating",
    },
    {
        id: 4,
        title: "Alcohol was served",
    },
    {
        id: 5,
        title: "Still Oen",
    },
];


const DiningOut = () => {
    return (
        <div>
            <div className="max-width">
                <Filters filterList = {diningFilters} />
            </div>
        </div>
    );
}

export default DiningOut;
