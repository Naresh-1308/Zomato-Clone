import React from 'react';
import "./Nightlife.scss";
import Filters from '../../components/Filters/Filters';

const nightlifeFilters = [
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
        // icon: ,
        title: "distance",
    },
    {
        id: 4,
        title: "Pure Veg",
    },
    {
        id: 5,
        title: "Pubs and Bars",
    },
];


const Nightlife = () => {
    return (
        <div>
            <div className="max-width">
                <Filters filterList = {nightlifeFilters} />
            </div>
        </div>
    );
};

export default Nightlife;