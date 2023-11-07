/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FeaturedFoodCart from './FeaturedFoodCart';
import { Link } from 'react-router-dom';
// import { useLoaderData, useParams } from 'react-router-dom';

const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([])
    useEffect(() =>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFeaturedFoods(data))
    },[])
    return (
        <div className=' container mx-auto flex  flex-col items-center'>
            <h2 className="md:text-4xl font-mono rounded-full md:p-4 mt-12 text-center md:bg-[#a3f1d2] mb-4">Featured Foods</h2>
            <div className=' lg:grid lg:grid-cols-3 gap-8'>
                {
                    featuredFoods.map(featuredFood => <FeaturedFoodCart key={featuredFood.id} featuredFood={featuredFood}></FeaturedFoodCart>)
                }
            </div>
            <Link to={'/availableFoods'}>
                <button className="btn btn-outline w-[150px] mt-8 btn-success">Show All</button>
            </Link>
            
        </div>
    );
};

export default FeaturedFoods;