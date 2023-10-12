import React from 'react';
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <span> Get The App </span>
                <div className="right">
                    <span> Investor Realations </span>
                    <span> Add Restaurant </span>
                    <span> Log in </span>
                    <span> Sign in </span>
                </div>
            </nav>

            <div className="headerContent">
                <img src={ Logo } alt="logo_img" />
                
                <h3> Discover the best food & drinks in Jaipur </h3>

                <div className="input">

                    <select name="" id="">
                        <option value="chennai"> Chennai </option>
                        <option value="banglore"> Banglore </option>
                        <option value="noida"> Noida </option>
                        <option value="delhi"> Delhi </option>
                        <option value="chandigarh"> Chandigarh </option>
                        <option value="mumbai"> Mumbai </option>
                    </select>
                    |
                    <input type="text" placeholder='Search for restaurant, cuisine or a dish' />

                </div>

            </div>
        </div>
    );
}

export default Header;