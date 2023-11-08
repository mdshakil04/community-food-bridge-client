/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ManageFoodsCart from './ManageFoodsCart';
const ManageFoods = () => {
    const food = useLoaderData()
    return (
        <div className=' my-16'>
            <h2 className="text-4xl text-center mb-12">Manage your added Food</h2>
            <div className=' container mx-auto text-center'>
                {
                    food.map(singleFood => <ManageFoodsCart key={name} singleFood={singleFood}></ManageFoodsCart>)
                }
            </div>
        </div>
    );
};

export default ManageFoods;