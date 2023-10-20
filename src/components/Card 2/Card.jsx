import React from 'react';
import "./Card.scss";
import Dine from "../../assets/images/Dine-Out.png";
import Online from "../../assets/images/Online-Food.png";
import NightLife from "../../assets/images/Night-Life.png";

const Card = () => {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={ Online } alt="dine_img" />
                <h1> Order Online </h1>
                <span> Stay home and order to your doorstep </span>
            </div>

            <div className="cardImg">
                <img src={ NightLife } alt="nightlife_img" />
                <h1> Nightlife and Clubs </h1>
                <span> Explore the city's Nightlife outlets </span>
            </div>

            <div className="cardImg">
                <img src={ Dine } alt="dine_img" />
                <h1> Dinning </h1>
                <span> View the city's favourite venues </span>
            </div>
        </div>
    )
}

export default Card;