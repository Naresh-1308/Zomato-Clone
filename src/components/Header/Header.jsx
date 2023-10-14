import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
        <div className='max-width header'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="zomato-logo" className='header-logo' />

            <div className='header-right'>                   { /* logo is left part and other entire part is right part*/}
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fi fi-rr-marker absolute-center location-icon"></i>
                            <div> Jaipur </div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>

                    <div className="location-seperator"></div>

                    <div className="header-search-bar">
                        <i className="fi fi-rr-search absolute-center header-search-icon"></i>
                        <input className='header-search-input' placeholder='Search for a restaurant, cuisine or a dish' />
                    </div>
                </div>
                
                <div className="header-profile-wrapper">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                    alt=" profile-picture " className='header-profile-image'/>
                    <span className='header-username'> Naresh </span>
                    <i className="fi fi-rr-angle-down absolute-center header-profile-options-icon"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
