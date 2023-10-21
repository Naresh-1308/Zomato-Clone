import React from 'react';
import "./Nightlife.scss";
import Filters from '../../components/Filters/Filters';
import DiningCollections from '../DiningOut/Dining Out Collections/DiningCollections';
import Explore from '../Delivery/Explore Section/Explore';
import { NightLife } from '../../Data/NightLife';

const collectionList = [
    {
        id: 1,
        title: "Best Bars & Pubs",
        cover: "https://b.zmtcdn.com/data/collections/eb98e6031b99817fc6a82712b99067f0_1696923781.png",
        places: "20 places",
    }
];


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
        title: "Pubs and Bars",
    },
];

const nightlifeList = NightLife;


const Nightlife = () => {
    return (
        <div>

            <DiningCollections list={collectionList} />

            <div className="max-width">
                <Filters filterList = {nightlifeFilters} />
            </div>

            <Explore list = {nightlifeList} collectionName = "Nightlife Restaurants in Jaipur" />
        </div>
    );
};

export default Nightlife;