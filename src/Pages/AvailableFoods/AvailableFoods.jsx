import { useEffect, useState } from "react";
import AvailableFoodsCart from "./AvailableFoodsCart";
import {Helmet} from "react-helmet";
// import { data } from "autoprefixer";

const AvailableFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    fetch("https://community-food-bridge-server-by1dafbpu.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
      
  }, []);
  console.log(allFoods.length)
  return (
    <div className=" mt-16 ">
        <Helmet>
          <title>Available Foods</title>
        </Helmet>
      <h2 className="text-4xl text-center">
        We have <span className=" text-green-400 font-bold">{allFoods.length}</span> items of Foods in our Food Bank
      </h2>
      <div className=" container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-8">
        {allFoods.map((allFood) => (
          <AvailableFoodsCart
            key={allFoods._id}
            allFood={allFood}
          ></AvailableFoodsCart>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
