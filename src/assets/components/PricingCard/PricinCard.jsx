import React from 'react';
import PricingFeatures from './PricingFeature';
import PricingFeature from './PricingFeature';

const PricinCard = ({pricing}) => {
  const {name, price, description, features} = pricing;
  return (
    
    <div className='container mx-auto px-10'>
        <div  className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
      {/* card header */}
        <div>
          <h1 className='text-4xl text-white font-bold text-center'>{name}</h1>
          <h1 className='text-2xl bg-[#F5F1DC] text-center mt-5 rounded-xl py-2'>{price}</h1>
        </div>
      {/* card body */}
        <div className='bg-amber-200 p-4 rounded-2xl mt-10 flex-1'>
          <p>{description}</p>
          {
            features.map((feature, index) => <PricingFeature 
            key={index}
            feature={feature}></PricingFeature>)
          }
        </div>
        <button className="bg-[#FF9D3D] py-2 rounded-2xl w-full hover:bg-[#F5F1DC] border-3 border-amber-100 font-bold mt-8 mb-5">Order Now</button>
        </div>
    </div>
 
  );
};

export default PricinCard;