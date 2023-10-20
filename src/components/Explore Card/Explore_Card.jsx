import React from 'react';
import "./Explore_Card.scss";

const Explore_Card = ({ restaurant }) => {

    const name = restaurant?.info?.name ?? "";       // this is used if we going deep inside in any object
    const coverImage = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisine = restaurant?.info?.cuisine?.map((item)=> item.name).slice(0,3);
    const bottomContainers = restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;
    const discount = offers.length > 1 ? offers[1].text : offers.length===1 ? offers[0].text : null;


    return (
        <div className='explore-card cursor'>
            <div className="explore-card-cover">
                <img src= {coverImage} alt= {name} className='explore-card-image' />
                <div className='delivery-time'> {deliveryTime} </div>
                {proOff && <div className='pro-offers'> {proOff} </div> }
                {goldOff && <div className='gold-offers absolute-center'> {goldOff} </div> }
                {discount && <div className='discount absolute-center'> {discount} </div> }
            </div>
            <div className="restaurant-row">
                <div className='restuarant-name'> {name} </div>
                {rating &&
                    <div className='restaurant-rating absolute-center'> {rating} <i className="fi fi-rr-star absolute-center"></i> </div> 
                }
            </div>
            <div className="restaurant-row">
                {cuisine.length && 
                    (<div className="restaurant-cuisine">
                        {cuisine.map((item,i)=> {
                            return <span className='restaurant-cuisine-tag'> {item}{i !== cuisine.length-1 && ","} </span>
                        })}
                    </div> 
                )}
                {approxPrice && <div className='restaurant-price'> {approxPrice} </div> }
            </div>
            {bottomContainers.length > 0 && 
                <div>
                    <div className="card-seperator"></div>
                    <div className="explore-bottom">
                        <img 
                            src= {bottomContainers[0]?.image?.url } 
                            alt={bottomContainers[0]?.text} 
                            style={{ height: "18px" }} 
                        />
                        {/* {bottomContainers[0]?.text} */}
                        <div className="restaurant-bottom-text"> {bottomContainers[0]?.text} </div>
                    </div>
                </div> 
            }
        </div>
    );
};

export default Explore_Card;