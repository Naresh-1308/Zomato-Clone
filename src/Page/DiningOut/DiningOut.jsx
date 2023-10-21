import React from 'react';
import "./DiningOut.scss";
import DiningCollections from './Dining Out Collections/DiningCollections';
import Filters from '../../components/Filters/Filters';
import { diningOut } from '../../Data/DiningOut';
import Explore from '../Delivery/Explore Section/Explore';


const collectionList = [
    {
        id: 1,
        title: "Navratri Special Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/ac342b09cba9ce4c73503625f12514f5_1697020581.png",
        places: "14 places",
    },
    {
        id: 2,
        title: "live cricket screening",
        cover: "https://b.zmtcdn.com/data/collections/ae824d420805754f2d68037fcb33b860_1696839192.png",
        places: "24 places",
    },
    {
        id: 3,
        title: "Best Insta-worthy Places",
        cover: "https://b.zmtcdn.com/data/collections/1dedf8663e048ac43b27f2441cb81068_1696838365.png",
        places: "27 places",
    },
    {
        id: 4,
        title: "Must-Visit Legendary Places",
        cover: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120500.jpg",
        places: "8 places",
    },
    {
        id: 5,
        title: "Great Buffets",
        cover: "https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675240197.jpg",
        places: "8 places",
    },
    {
        id: 6,
        title: "Places For A Royal Dining Experience",
        cover: "https://b.zmtcdn.com/data/collections/41be2951a517fc563297a65c4ad8f7a6_1675243777.jpg",
        places: "7 places",
    },
    {
        id: 7,
        title: "premium coffee shops",
        cover: "https://b.zmtcdn.com/data/collections/54a38c33ce8c62c7754e3f0b2fa6eb60_1695898758.png",
        places: "13 places",
    },
    {
        id: 8,
        title: "Serene Rooftop Places",
        cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1675239897.jpg",
        places: "27 places",
    },


]

const diningFilters = [
    {
        id: 1,
        icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "filter",
    },
    {
        id: 2,
        title: "Rating: 4.0+",
    },
    {
        id: 3,
        title: "outdoor seating",
    },
    {
        id: 4,
        title: "alcohol was served",
    },
    {
        id: 5,
        title: "still open",
    },
];


const diningList = diningOut;

const DiningOut = () => {
    return (
        <div>
            <DiningCollections list = {collectionList} />

            <div className="max-width">
                <Filters filterList = {diningFilters} />
            </div>
        
            <Explore list = {diningList} collectionName= "Best Dining Restaurants Near You in Jaipur" />
        </div>
    );
};

export default DiningOut;