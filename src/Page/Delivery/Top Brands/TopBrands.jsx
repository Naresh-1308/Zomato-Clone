import React from 'react';
import "./TopBrands.scss";
import PreviousArrow from '../../../components/Carousel/PreviousArrow';
import NextArrow from '../../../components/Carousel/NextArrow';


const brandList = [
    {
        id: 1,
        time: "28 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c37b450dacb06430cc02d6c1ca82a448_1617984339.png?output-format=webp",
    },
    {
        id: 2,
        time: "27 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/cdcfec38a53a7edd76e282bee953e44f_1664867311.png?output-format=webp",
    },
    {
        id: 3,
        time: "26 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6743c2bf4409654a14320694e6e2f88a_1617984416.png?output-format=webp",
    },
    {
        id: 4,
        time: "27 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383614.png?output-format=webp",
    },
    {
        id: 5,
        time: "37 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/76cee521f3905f01a515d71881ff70ae_1630687191.png?output-format=webp",
    },
    {
        id: 6,
        time: "25 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/72093a8b7046c690006fab2a9e269bde_1630661078.png?output-format=webp",
    },
    {
        id: 7,
        time: "20 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/a9aa694ad274753f597b898473af80c5_1646122776.png?output-format=webp",
    },
    {
        id: 8,
        time: "17 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520813.png?output-format=webp",
    },
    {
        id: 9,
        time: "27 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675832911.png?output-format=webp",
    },
    {
        id: 10,
        time: "38 minutes",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/eeb8a7423bd42e739b72876506d9c87e_1594960767.png?output-format=webp",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
};

const TopBrands = () => {
    return (
        <div>TopBrands</div>
    );
};

export default TopBrands;