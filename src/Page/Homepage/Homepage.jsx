import React, { useState } from 'react';
import "./Homepage.scss";
import Header from '../../components/Header/Header';
import TabOptions from '../../components/TabOptions/TabOptions';
import Footer from '../../components/Footer/Footer';
import Delivery from '../Delivery/Delivery';
import DiningOut from '../DiningOut/DiningOut';
import Nightlife from '../Nightlife/Nightlife';


const Homepage = () => {

    const [ activeTab, setActiveTab ] = useState("Delivery");

    return (
        
        <div>

            <Header />
            <TabOptions activeTab = { activeTab } setActiveTab = { setActiveTab } />

            { getCorrectScreen(activeTab) }
            
            <Footer />
        </div>
    );
};

const getCorrectScreen = ( tab ) => {

    switch( tab ) {

        case "Delivery":
            return <Delivery />
        
        case "Dining Out":
            return <DiningOut />
        
        case "Nightlife":
            return <Nightlife />

        default:
            return <Delivery />
        
    }
};

export default Homepage;
