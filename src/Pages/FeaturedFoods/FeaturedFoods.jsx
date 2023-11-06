/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FeaturedFoodCart from './FeaturedFoodCart';
// import { useLoaderData, useParams } from 'react-router-dom';

const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([])
    useEffect(() =>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFeaturedFoods(data))
    },[])
    return (
        <div className=' container mx-auto'>
            <h2 className="text-6xl text-center my-8">Featured Foods</h2>
            <div className=' lg:grid lg:grid-cols-3 gap-8'>
                {
                    featuredFoods.map(featuredFood => <FeaturedFoodCart key={featuredFood.id} featuredFood={featuredFood}></FeaturedFoodCart>)
                }
            </div>
        </div>
    );
};

export default FeaturedFoods;