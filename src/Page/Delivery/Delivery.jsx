import React from 'react';
import "./Delivery.scss";
import Filters from '../../components/Filters/Filters';
import DeliveryCollections from './Delivery Collections/DeliveryCollections';
import TopBrands from './Top Brands/TopBrands';
import Explore from './Explore Section/Explore';
import { restaurants } from '../../Data/Restaurants';


const deliveryFilters = [
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
        title: "Safe and Hygienic",
    },
    {
        id: 4,
        title: "Pure Veg",
    },
    {
        id: 5,
        icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
        title: "Delivery Time",
    },
    {
        id: 6,
        title: "Great Offers",
    },
];


const restaurantList = restaurants;

const Delivery = () => {
    return (
        <div>
            <div className="max-width">
                <Filters filterList = {deliveryFilters} />
            </div>

            <DeliveryCollections />
            <TopBrands />
            <Explore list = {restaurantList} collectionName = 'Delivery Restaurants in Jaipur' />
        </div>
    );
};

export default Delivery;